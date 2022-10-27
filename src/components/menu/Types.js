import React from 'react';

function Types() {
  const typeList = () => {
  };
  return(
    <div id="types" className="facet">
      <div className="ais-root ais-refinement-list">
        <div className="ais-refinement-list--header ais-header">
          <div className="facet-title">Type</div>
        </div>
        <div className="ais-body ais-refinement-list--body">
          <div className="ais-refinement-list--list">
            {typeList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types;
