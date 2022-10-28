import React, { useState, useEffect } from 'react';
import Categories from './Categories';
import Types from './Types';
import Branchs from './Branchs';


function Menu(props) {
  const {
    selectedBranchIds,
    setSelectedBranchIds,
    selectedTypeIds,
    setSelectedTypeIds,
    categoryId,
    setCategoryId,
    clearFilter,
    inputSearch
  } = props;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let url=`http://localhost:3000/categories`;

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      })
  }, []);

  const checkDisplayClear = () => {
    return selectedBranchIds.length > 0 || selectedTypeIds.length > 0 || categoryId !== '' || inputSearch !== '';
  };

  return(
    <aside>
      <div id="clear-all" style={{ display: checkDisplayClear() ? 'block' : 'none'}}>
        <div className="ais-root ais-clear-all btn btn-block btn-default">
          <div className="ais-body ais-clear-all--body">
            <a className="ais-clear-all--link" href="javascript:void(0);" onClick={() => clearFilter()} >
              <div><i className="fa fa-eraser"></i> Clear all filters</div>
            </a>
          </div>
        </div>
      </div>
      <section className="facet-wrapper">
        <div className="facet-category-title">Show results for</div>
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} categories={categories} />
      </section>
      <section className="facet-wrapper">
        <div className="facet-category-title">Refine by</div>
        <Types
          selectedTypeIds={selectedTypeIds}
          setSelectedTypeIds={setSelectedTypeIds}
          categoryId={categoryId}
          categories={categories}
        />
        <div id="brands" className="facet">
          <div className="ais-root ais-refinement-list">
            <div className="ais-refinement-list--header ais-header">
              <div className="facet-title">Brand</div>
            </div>
            <Branchs
              selectedBranchIds={selectedBranchIds}
              setSelectedBranchIds={setSelectedBranchIds}
              categoryId={categoryId}
              categories={categories}
            />
          </div>
        </div>
        <div id="rating" className="facet" />
        <div id="prices" className="facet" />
      </section>
      <div className="thank-you">
        Data courtesy of <a href="https://developer.bestbuy.com/">Best Buy</a>
      </div>
    </aside>
  );
}
export default Menu;
