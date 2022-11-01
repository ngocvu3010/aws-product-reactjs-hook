import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import './css/app.css';

function App() {
  const [inputSearch, setInputSearch] = useState('');
  const [selectedBranchIds, setSelectedBranchIds] = useState([]);
  const [selectedTypeIds, setSelectedTypeIds] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');

  const clearFilter = () => {
    setInputSearch('');
    setSelectedBranchIds([]);
    setSelectedTypeIds([]);
    setCategoryId('');
    setPriceStart('');
    setPriceEnd('');
  };

  return (
    <div className="container-fluid">
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <div className="content-wrapper">
        <Menu
          selectedBranchIds={selectedBranchIds}
          setSelectedBranchIds={setSelectedBranchIds}
          selectedTypeIds={selectedTypeIds}
          setSelectedTypeIds={setSelectedTypeIds}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          clearFilter={clearFilter}
          inputSearch={inputSearch}
          priceStart={priceStart}
          setPriceStart={setPriceStart}
          priceEnd={priceEnd}
          setPriceEnd={setPriceEnd} />
        <Main
          inputSearch={inputSearch}
          selectedBranchIds={selectedBranchIds}
          selectedTypeIds={selectedTypeIds}
          priceStart={priceStart}
          priceEnd={priceEnd} />
      </div>
    </div>
  );
}

export default App;
