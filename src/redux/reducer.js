import {combineReducers} from 'redux';
import FiltersReducer from './reducers/filter.reducer'

const rootReducer = combineReducers({
  filters: FiltersReducer
});

export default rootReducer;
