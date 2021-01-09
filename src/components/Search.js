import "./Search.css";

import React from "react";

import SearchBar from "./SearchBar.js";
import CatSelector from "./CatSelector";

const Search = (props) => {
  return (
    <div className="searchContainer">
      <SearchBar />
      <CatSelector
        allEntries={props.allEntries}
        entrySelector={props.entrySelector}
      />
    </div>
  );
};

export default Search;
