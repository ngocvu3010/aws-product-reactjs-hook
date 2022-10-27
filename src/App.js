import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import './css/app.css';

function App() {
  const [inputSearch, setInputSearch] = useState('');
  const [selectedBranchIds, setSelectedBranchIds] = useState([]);

  return (
    <div className="container-fluid">
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <div className="content-wrapper">
        <Menu selectedBranchIds={selectedBranchIds} setSelectedBranchIds={setSelectedBranchIds} />
        <Main inputSearch={inputSearch} selectedBranchIds={selectedBranchIds} />
      </div>
    </div>
  );
}

export default App;
