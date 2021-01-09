//import "./KwSelector.css";

import React from "react";
import Select from "react-select";

import { useEffect, useState } from "react";
import {
  objToArray,
  fetchLabelValue,
  selectEntriesCategory,
  updateKeywords,
} from "./dataHandling";

const KwSelector = (props) => {
  const getData = () => {
    fetch("/kws")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        d = objToArray(d);
        d.sort();
        console.log(d);
        setData(d);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className="keywordSelectorContainer">
      <label htmlFor="categories" className="propTitle">
        Choose keywords
      </label>
      <br></br>
      <Select
        isMulti
        options={data && data.length >= 0 && fetchLabelValue(data)}
        onChange={(c) =>
          updateKeywords(
            c,
            props.entrySelector,
            props.setKeywords,
            props.selectedEntries,
            props.selectedKeywords,
            props.selectedCategory
          )
        }
      />
    </div>
  );
};

export default KwSelector;
