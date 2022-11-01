import React from 'react';

function Product({product, inputSearch}) {
  const getTitle = (productTitle) => {
    if (!inputSearch) return productTitle;
    let originString = productTitle.replaceAll("<em>", "</em>").replaceAll("</em>", "");
    const titleDisplay = originString.replace(inputSearch, `<em>${inputSearch} </em>`);
    return titleDisplay;

  }

  return(
    <div className="ais-hits--item">
      <article className="hit">
        <div className="product-picture-wrapper">
          <div className="product-picture">
            <img src={product.image_url}  />
            </div></div>
            <div className="product-desc-wrapper">
              <div className="product-name" dangerouslySetInnerHTML={{__html: getTitle(product.title)}}></div>
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
