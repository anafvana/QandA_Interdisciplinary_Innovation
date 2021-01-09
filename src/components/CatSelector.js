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
  const getData = () => {
    fetch("/cats")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        d = objToArray(d);
        d.sort();
        setData(d);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = useState([]);

  return (
    <div className="catSelectorContainer">
      <label htmlFor="categories" className="propTitle">
        Choose a category
      </label>
      <br></br>
      <Select
        placeholder="All categories"
        options={data && data.length >= 0 && fetchLabelValue(data)}
        onChange={(c) =>
          props.entrySelector(selectEntriesCategory(props.allEntries, c.label))
        }
      />
    </div>
  );
};

export default CatSelector;
