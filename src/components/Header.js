import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inputSearchChange} from '../redux/actions';
import {inputSearchSelector} from '../redux/selector';

function Header({inputSearch, setInputSearch}) {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputSearch(val);
    dispatch(inputSearchChange(val));
  }

  return(
    <header className="content-wrapper">
      <a href="https://community.algolia.com/instantsearch.js/" className="is-logo"><img src="logo192.png" width={40} /></a>
      <a href="./" className="logo">amazing</a>
      <div className="input-group">
        <input type="text" className="form-control" id="q"
          value={inputSearch}
          onChange={handleInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-default"><i className="fa fa-search" /></button>
        </span>
      </div>
    </header>
  );
}

export default Header;
