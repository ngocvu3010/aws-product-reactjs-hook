import {combineReducers} from 'redux';
import FiltersReducer from './reducers/filter.reducer'
import ProductsReducer from './reducers/products.reducer'


const rootReducer = combineReducers({
  filters: FiltersReducer,
  products: ProductsReducer
});

export default rootReducer;
