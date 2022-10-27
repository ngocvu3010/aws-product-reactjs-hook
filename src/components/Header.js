import React from 'react';

function Header(props) {
  const {inputSearch, setInputSearch} = props;

  return(
    <header className="content-wrapper">
      <a href="https://community.algolia.com/instantsearch.js/" className="is-logo"><img src="logo192.png" width={40} /></a>
      <a href="./" className="logo">amazing</a>
      <div className="input-group">
        <input type="text" className="form-control" id="q"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <span className="input-group-btn">
          <button className="btn btn-default"><i className="fa fa-search" /></button>
        </span>
      </div>
    </header>
  );
}

export default Header;
