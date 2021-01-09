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
function categoryIsPresent(categoryName, entry) {
  let res = false;
  entry.categories.forEach((c) => {
    if (categoryName === c.str) {
      res = true;
    }
  });
  return res;
}

//Selects all entries with determined category
function selectEntriesCategory(allEntries, categoryName) {
  let list = [];
  if (categoryName === "All categories") {
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
  return list;
}
export { selectEntriesCategory };
