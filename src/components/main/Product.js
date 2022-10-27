import React from 'react';

function Product(props) {
  const {product} = props;

  return(
    <div className="ais-hits--item">
      <article className="hit">
        <div className="product-picture-wrapper">
          <div className="product-picture">
            <img src={product.image_url}  />
            </div></div>
            <div className="product-desc-wrapper">
              <div className="product-name">{product.title}</div>
              <div className="product-type" />
              <div className="product-price">{product.price}</div>
            <div className="product-rating">
              <span className="ais-star-rating--star" />
              <span className="ais-star-rating--star" />
              <span className="ais-star-rating--star" />
              <span className="ais-star-rating--star" />
              <span className="ais-star-rating--star__empty" />
            </div>
          </div>
      </article>
    </div>
  );
}
export default Product;
