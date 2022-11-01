import React, { useState, useEffect } from 'react';
import Product from './Product';
import Pagination from './Pagination';
import TopBar from './TopBar';

function Main(props) {
  const {inputSearch, selectedBranchIds, selectedTypeIds, priceStart, priceEnd} = props;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('asc');

  useEffect(() => {
    let url=`http://localhost:3000/products?`;
    if (inputSearch) {
      url += `&title_like=${inputSearch}`
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

    if (priceStart) {
      url += `&price_gte=${priceStart}`;
    }

    if (priceEnd) {
      url += `&price_lte=${priceEnd}`;
    }

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      })
  }, [inputSearch, selectedBranchIds, selectedTypeIds, sortType, priceStart, priceEnd]);

  const handlePagination = (page) => {
    if (page < 1 || page > Math.ceil(products.length / 4)) {
      return;
    }
    setCurrentPage(page);
  }
  const indexOfLastProduct = currentPage * 4;
  const indexOfFirstProduct = indexOfLastProduct - 4;

  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const resultPagination = () => {
    if (products.length != 0) {
      return(
        <Pagination currentPage={currentPage} handlePagination={handlePagination} totalProduct={products.length} />
      )
    } else {
      return(
        <div className="text-center">No results found matching <strong>{inputSearch}</strong>.
        </div>
      )
    }
  }

  return(
    <div className="results-wrapper">
      <TopBar sortType={sortType} setSortType={setSortType} products={products} />
      <main id="hits">
        {
          currentProducts.map((product, i) => (
            <Product product={product} inputSearch={inputSearch} key={i} />
          ))
        }
      </main>

      {resultPagination()}
    </div>
  );
}

export default Main;
