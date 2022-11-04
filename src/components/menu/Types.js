import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {selectedTypeIdsChange} from '../../redux/actions';

function Types(props) {
  const dispatch = useDispatch();
  const {selectedTypeIds, setSelectedTypeIds, categoryId, categories} = props;
  const [types, setTypes] = useState([]);

  useEffect(() => {
    let url=`http://localhost:3000/types?`;

    const categoryIds = categories.filter(category => category.id == categoryId).map(category => category.childs.map(child => child.id))[0];
    if (categoryId !== '') {
      if (categoryIds == undefined) {
          url += `&category_id=${categoryId}`;
      } else {
        for(let i in categoryIds) {
          url += `&category_id=${categoryIds[i]}`
        }
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTypes(result);
      })
  }, [categoryId]);

  const selectType = (typeId) => {
    const newSelectedType = [...selectedTypeIds];
    const currentType = newSelectedType.indexOf(typeId);

    if(currentType === -1){
      newSelectedType.push(typeId);
    } else {
      newSelectedType.splice(currentType, 1);
    }
    setSelectedTypeIds(newSelectedType);
    dispatch(selectedTypeIdsChange(newSelectedType));
  };

  return(
    <div id="types" className="facet">
      <div className="ais-root ais-refinement-list">
        <div className="ais-refinement-list--header ais-header">
          <div className="facet-title">Type</div>
        </div>
        <div className="ais-body ais-refinement-list--body">
          <div className="ais-refinement-list--list">
            {
              types.map((type, i) => (
                <div className="ais-refinement-list--item" key={i}>
                  <div>
                    <a href="javascript:void(0);" className="facet-item">
                      <input type="checkbox" className="ais-refinement-list--checkbox" checked={selectedTypeIds.includes(type.id)}
                        onChange={() => selectType(type.id)} />
                        {type.name}<span className="facet-count">(421)</span>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types;
