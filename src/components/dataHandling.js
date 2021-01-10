//Transforms object into array
function objToArray(data) {
  let a = [];
  data.forEach((element) => {
    a.push(element.str);
  });
  return a;
}
export { objToArray };

//Creates list of labels and values for Select component
function fetchLabelValue(data) {
  let listLblVal = [{ label: "All categories", value: "all" }];
  data.map((c) => listLblVal.push({ label: c, value: c.replace(/\s+/g, "-") }));
  return listLblVal;
}
export { fetchLabelValue };

//Determines whether category is present in an entry
function categoryIsPresent(cat, entry) {
  let res = false;
  entry.categories.forEach((c) => {
    if (cat === c.str) {
      res = true;
    }
  });
  return res;
}

//Determines whether keyword is present in an entry
function keywordIsPresent(kw, entry) {
  let res = false;
  entry.keywords.forEach((c) => {
    if (kw === c.str) {
      res = true;
    }
  });
  return res;
}

//Selects all entries with determined category and keywords
function selectEntriesCategory(allEntries, keywordlist, categoryName) {
  let list = [];
  console.log("selectEntriesCategory: allEntries length: " + allEntries.length);
  if (categoryName === "All categories" || categoryName == null) {
    list = deepCopyObject(allEntries);
  } else {
    allEntries.map((entry) => {
      let ispresent = categoryIsPresent(categoryName, entry);
      if (ispresent) {
        list.push(deepCopyObject(entry));
      }
      return list;
    });
  }

  if (keywordlist != null && keywordlist.length > 0) {
    console.log("keywords are here");
    list = filterByKeywords(list, keywordlist);
  }

  return list;
}
export { selectEntriesCategory };

//Selects all entries with determined keyword
function filterByKeywords(selectedEntries, keywordsList) {
  let list = deepCopyObject(selectedEntries);
  list.forEach((entry) => {
    keywordsList.forEach((kw) => {
      let isPresent = keywordIsPresent(kw.label, entry);
      if (!isPresent) {
        list = delElem(list, entry);
      }
    });
    console.log("in filterByKeywords");
    console.log(list);
    return list;
  });
  return list;
}
export { filterByKeywords };

//Updates keyword list and refreshes component
function updateKeywords(
  keywordList,
  entrySelector,
  setKeywords,
  allEntries,
  selectedCategory
) {
  console.log("updateKeywords: allEntries length: " + allEntries.length);
  setKeywords(keywordList);
  entrySelector(
    selectEntriesCategory(allEntries, keywordList, selectedCategory)
  );
  console.log("done with entry selector");
}
export { updateKeywords };

//Delete element from array (of keywords or categories)
function delElem(array, element) {
  if (array != null && array.length > 0) {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] === element) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

//Creates deep copy of object/array
function deepCopyObject(inObj) {
  if (!inObj) {
    return inObj;
  }

  let v;
  let outObj = Array.isArray(inObj) ? [] : {};
  for (const i in inObj) {
    v = inObj[i];
    outObj[i] = typeof v === "object" ? deepCopyObject(v) : v;
  }

  return outObj;
}
