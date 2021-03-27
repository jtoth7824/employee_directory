import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="searchForm form-inline m-2">
        <input
          value={props.searchString}
          onChange={props.handleInputChange}
          name="searchTerm"
          type="text"
          className="form-control"
          placeholder="Type in a value to search on"
        />
    </form>
  );
}

export default SearchForm;
