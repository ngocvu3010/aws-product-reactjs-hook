import React from 'react';

function Categories() {
  const categoryList = () => {
  };

  return(
    <div id="categories">
      <div className="ais-root ais-hierarchical-menu">
        <div className="ais-body ais-hierarchical-menu--body">
          <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
            {categoryList}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
