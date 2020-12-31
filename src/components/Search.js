import './Search.css'

import React from 'react';

import SearchBar from './SearchBar.js'
import CatSelector from './CatSelector'

const Search = () => {
    return (
        <div className="searchContainer">
            <SearchBar />
            <CatSelector />
        </div>
    );
}

export default Search;