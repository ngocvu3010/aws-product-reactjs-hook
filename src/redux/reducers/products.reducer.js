const ProductsReducer = (state = {productList: []}, action) => {
  switch(action.type) {
    case 'GET_LIST_PRODUCT':
      return {
        ...state,
        load: true
      }

    case 'GET_LIST_PRODUCT_SUCCESS':
      return {
        ...state,
        productList: action.payload,
        load: false
      }
    case 'GET_LIST_PRODUCT_FAILED':
      return state;

    default:
      return state;
  }
}

export default ProductsReducer;
