import React from 'react';

function TopBar({sortType, setSortType, products}) {
  return(
    <section id="results-topbar">
      <div className="sort-by">
        <label>Sort by</label>
        <div id="sort-by-selector">
          <select className="ais-sort-by-selector"
            onChange={(e) => setSortType(e.target.value)}>
            <option className="ais-sort-by-selector--item" value="asc">
              Price asc.
            </option>
            <option className="ais-sort-by-selector--item" value="desc">
              Price desc.
            </option>
          </select>
        </div>
      </div>
      <div id="stats" className="text-muted">
        <div data-reactroot="">
          <div className="ais-root ais-stats">
            <div className="ais-body ais-stats--body">
              <div>
                {products.length} results
                <span className="ais-stats--time">found in 7ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TopBar;
