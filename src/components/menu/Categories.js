import React from 'react';

function Categories({categoryId, setCategoryId, categories}) {
  const selectCategory = (categoryId) => {
    setCategoryId(categoryId);
  };

  const classActive = (category) => {
    let className =  "facet-item";
    if  (category.id == categoryId) {
      className = "facet-item active";
    }
    return className;
  }

  return(
    <div id="categories">
      <div className="ais-root ais-hierarchical-menu">
        <div className="ais-body ais-hierarchical-menu--body">
          <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl0">
            {
              categories.map((category, i) => (

                  <div className="ais-hierarchical-menu--item ais-hierarchical-menu--item__active" key={category.id}>
                    <div>
                      <a href="javascript:void(0);" className={classActive(category)} onClick={() => selectCategory(category.id)}>
                        <span className="facet-name">
                          <i className="fa fa-angle-right" /> {category.name}
                        </span>
                      </a>
                    </div>
                    <div className="ais-hierarchical-menu--list ais-hierarchical-menu--list__lvl1">
                      {
                        category.childs.map((category, i) => (
                          <div className="ais-hierarchical-menu--item" key={category.id}>
                            <div>
                              <a href="javascript:void(0);" className={classActive(category)} onClick={() => selectCategory(category.id)}>
                                <span className="facet-name"><i className="fa fa-angle-right" /> {category.name}</span>
                              </a>
                          </div>
                        </div>
                        ))
                      }
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
