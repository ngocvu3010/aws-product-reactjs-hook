import React, { useState, useEffect } from 'react';
import Product from './Product';

function Main(props) {
  const {inputSearch, selectedBranchIds, selectedTypeIds} = props;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let url=`http://localhost:3000/products?`;
    if (inputSearch) {
      url += `&title=${inputSearch}`
    };

    if (selectedBranchIds.length > 0) {
      for(let i in selectedBranchIds) {
        url += `&branch_id=${selectedBranchIds[i]}`
      }
    }

    if (selectedTypeIds.length > 0) {
      for(let i in selectedTypeIds) {
        url += `&type_id=${selectedTypeIds[i]}`
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
  }, [inputSearch, selectedBranchIds, selectedTypeIds]);

  return(
    <div className="results-wrapper">
      <section id="results-topbar">
        <div className="sort-by">
          <label>Sort by</label>
          <div id="sort-by-selector" />
        </div>
        <div id="stats" className="text-muted" />
      </section>
      <main id="hits">
        {
          products.map((product, i) => (
            <Product product={product} key={i} />
          ))
        }
      </main>
      <section id="pagination" />
    </div>
  );
}

export default Main;
