import React from 'react';
import clsx from 'clsx';
import css from './SearchBox.module.css';
import PropTypes from 'prop-types';

const SearchBox = ({ value, setSearchText }) => {
  return (
    <div className="section">
      <div className="container">
        <p>Find contacts by name</p>
        <input
          className={clsx(css.SearchBoxField)}
          name="searchfield"
          value={value}
          onChange={event => setSearchText(event.target.value)}
        ></input>
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBox;
