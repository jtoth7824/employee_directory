import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="container">
    <form className="searchForm justify-content-center form-inline m-2">
        <input
          value={props.searchString}
          onChange={props.handleInputChange}
          name="searchTerm"
          type="text"
          className="form-control form-control-lg"
          placeholder="Search Term"
          onKeyPress={e => {
            if (e.key === 'Enter') e.preventDefault();
          }}
        />
    </form>
    </div>
  );
}

export default SearchForm;
