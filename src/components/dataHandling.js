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
  console.log(entry.id);
  console.log(res);
  return res;
}

//Selects all entries with determined category and keywords
function selectEntriesCategory(allEntries, keywordlist, categoryName) {
  let list = [];
  console.log(categoryName);
  if (categoryName === "All categories" || categoryName == null) {
    list = allEntries;
  } else {
    allEntries.map((entry) => {
      let ispresent = categoryIsPresent(categoryName, entry);
      if (ispresent) {
        list.push(entry);
      }
      return list;
    });
  }

  if (keywordlist != null && keywordlist.length > 0) {
    console.log("keywords are here");
    console.log(keywordlist);
    list = filterByKeywords(list, keywordlist);
  }

  return list;
}
export { selectEntriesCategory };

//Selects all entries with determined keyword
function filterByKeywords(selectedEntries, keywordsList) {
  selectedEntries.forEach((entry) => {
    keywordsList.forEach((kw) => {
      let isPresent = keywordIsPresent(kw.label, entry);
      if (!isPresent) {
        selectedEntries = delElem(selectedEntries, entry);
      }
    });
    console.log("in filterByKeywords");
    console.log(selectedEntries);
    return selectedEntries;
  });
  return selectedEntries;
}
export { filterByKeywords };

//Updates keyword list and refreshes component
function updateKeywords(
  keywordList,
  entrySelector,
  setKeywords,
  selectedEntries,
  selectedCategory
) {
  setKeywords(keywordList);
  entrySelector(
    selectEntriesCategory(selectedEntries, keywordList, selectedCategory)
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
