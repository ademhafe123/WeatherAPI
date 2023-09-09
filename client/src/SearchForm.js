import React from "react";

const SearchForm = (props) => {
  return (
    <form className="form" onSubmit={props.onSubmit}>
      <input
        type="text"
        name="city"
        value={props.value}
        onChange={(event) => {
          props.setValue(event.target.value);
        }}
        className="input"
        placeholder="Search a city..."
      />
      <button type="submit" className="search-btn">
        <i className="fa-solid fa-magnifying-glass fa-2x icon search-icon"></i>
      </button>
    </form>
  );
};

export default SearchForm;
