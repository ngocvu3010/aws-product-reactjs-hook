import React from 'react';
import Categories from './Categories';
import Types from './Types';
import Branchs from './Branchs';

function Menu(props) {
  const {selectedBranchIds, setSelectedBranchIds, selectedTypeIds, setSelectedTypeIds} = props;

  return(
    <aside>
      <div id="clear-all" style={{ display: 'block'}}>
        <div className="ais-root ais-clear-all btn btn-block btn-default">
          <div className="ais-body ais-clear-all--body">
            <a className="ais-clear-all--link" href="#"  >
              <div><i className="fa fa-eraser"></i> Clear all filters</div>
            </a>
          </div>
        </div>
      </div>
      <section className="facet-wrapper">
        <div className="facet-category-title">Show results for</div>
        <Categories />
      </section>
      <section className="facet-wrapper">
        <div className="facet-category-title">Refine by</div>
        <Types selectedTypeIds={selectedTypeIds} setSelectedTypeIds={setSelectedTypeIds} />
        <div id="brands" className="facet">
          <div className="ais-root ais-refinement-list">
            <div className="ais-refinement-list--header ais-header">
              <div className="facet-title">Brand</div>
            </div>
            <Branchs selectedBranchIds={selectedBranchIds} setSelectedBranchIds={setSelectedBranchIds}/>
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
