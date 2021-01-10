import "./CatSelector.css";

import React from "react";
import Select from "react-select";

import { useEffect, useState } from "react";
import {
  objToArray,
  fetchLabelValue,
  selectEntriesCategory,
} from "./dataHandling";

const CatSelector = (props) => {
  const getCatData = () => {
    fetch("/cats")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        d = objToArray(d);
        d.sort();
        setCatData(d);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getCatData();
  }, []);

  const [catData, setCatData] = useState([]);

  return (
    <div className="catSelectorContainer">
      <label htmlFor="categories" className="propTitle">
        Choose a category
      </label>
      <br></br>
      <Select
        placeholder="All categories"
        defaultValue="All categories"
        options={catData && catData.length >= 0 && fetchLabelValue(catData)}
        onChange={(c) =>
          props.entrySelector(
            selectEntriesCategory(
              props.allEntries,
              props.selectedKeywords,
              c.label
            )
          )
        }
      />
    </div>
  );
};

export default CatSelector;
