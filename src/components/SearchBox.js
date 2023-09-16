import React from "react";
import '../style/SearchBox.css'

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
            className="SearchInput"
            type="search" 
            placeholder="search robots" 
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;