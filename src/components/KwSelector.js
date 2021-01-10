//import "./KwSelector.css";

import React from "react";
import Select from "react-select";

import { useEffect, useState } from "react";
import { objToArray, fetchLabelValue, updateKeywords } from "./dataHandling";

const KwSelector = (props) => {
  const getKwData = () => {
    fetch("/kws")
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        d = objToArray(d);
        d.sort();
        console.log(d);
        setKwData(d);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getKwData();
  }, []);

  const [kwData, setKwData] = useState([]);

  return (
    <div className="keywordSelectorContainer">
      <label htmlFor="categories" className="propTitle">
        Choose keywords
      </label>
      <br></br>
      <Select
        isMulti
        options={kwData && kwData.length >= 0 && fetchLabelValue(kwData)}
        onChange={(c) =>
          updateKeywords(
            c,
            props.entrySelector,
            props.setKeywords,
            props.allEntries,
            props.selectedCategory
          )
        }
      />
    </div>
  );
};

export default KwSelector;
