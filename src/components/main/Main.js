import React, { useState, useEffect } from 'react';
import Product from './Product';
import Pagination from './Pagination';
import TopBar from './TopBar';

function Main(props) {
  const {inputSearch, selectedBranchIds, selectedTypeIds} = props;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    let url=`http://localhost:3000/products?`;
    if (inputSearch) {
      url += `&title=${inputSearch}`
    };

    if (selectedBranchIds.length > 0) {
      for(let i in selectedBranchIds) {
        url += `&branch_id=${selectedBranchIds[i]}`;
      }
    }

    if (selectedTypeIds.length > 0) {
      for(let i in selectedTypeIds) {
        url += `&type_id=${selectedTypeIds[i]}`;
      }
    }

    if (sortType) {
      url += `&_sort=price&_order=${sortType}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
  }, [inputSearch, selectedBranchIds, selectedTypeIds, sortType]);

  const handlePagination = (page) => {
    if (page < 1 || page > Math.ceil(products.length / 2)) {
      return;
    }
    setCurrentPage(page);
  }
  const indexOfLastProduct = currentPage * 2;
  const indexOfFirstProduct = indexOfLastProduct - 2;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return(
    <div className="results-wrapper">
      <TopBar sortType={sortType} setSortType={setSortType} products={products} />
      <main id="hits">
        {
          currentProducts.map((product, i) => (
            <Product product={product} key={i} />
          ))
        }
      </main>
      <Pagination currentPage={currentPage} handlePagination={handlePagination} totalProduct={products.length} />
    </div>
  );
}

export default Main;
