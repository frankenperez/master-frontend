import * as React from "react";
import SearchIcon from "app-icons/search-icon.svg";

export const SearchForm = (props) => (
  <form className="search" onSubmit={props.onSubmit}>
    <label className="search__label">Search an Organization</label>
    <input className="search__input" type="text" />
    <button className="search__button" type="submit">
      <SearchIcon className="search__icon" />
    </button>
  </form>
);
