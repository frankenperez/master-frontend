import * as React from "react";
import SearchIcon from "app-icons/search-icon.svg";
import CloseIcon from "app-icons/close-icon.svg";

interface Props {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: (event: React.FormEvent<HTMLFormElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  value: string;
}

export const SearchBox = (props: Props) => {
  return (
    <form className="search" onSubmit={props.onSubmit} onReset={props.onReset}>
      <label className="search__label">{props.label}</label>
      <input
        className="search__input"
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
      <div className="search__butons">
        <button
          className="search__submit"
          type="submit"
          disabled={!props.value}
        >
          <SearchIcon className="search__button__icon" />
        </button>
        <button className="search__reset" type="reset" disabled={!props.value}>
          <CloseIcon className="search__button__icon" />
        </button>
      </div>
    </form>
  );
};
