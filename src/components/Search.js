import "./Search.css";

import React from "react";

import CatSelector from "./CatSelector";
import KwSelector from "./KwSelector";

const Search = (props) => {
  return (
    <div className="searchContainer">
      <CatSelector
        allEntries={props.allEntries}
        entrySelector={props.entrySelector}
        selectedCategory={props.selectedCategory}
        setCategory={props.setCategory}
        selectedKeywords={props.selectedKeywords}
      />
      <KwSelector
        allEntries={props.allEntries}
        entrySelector={props.entrySelector}
        selectedCategory={props.selectedCategory}
        selectedKeywords={props.selectedKeywords}
        setKeywords={props.setKeywords}
      />
    </div>
  );
};

export default Search;
