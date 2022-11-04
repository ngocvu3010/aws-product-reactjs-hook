import * as constant from '../../constants/filter';

const initState = {
  inputSearch: '',
  selectedBranchIds: [],
  selectedTypeIds: [],
  categoryId: [],
  priceStart: '',
  priceEnd: ''
}

const FiltersReducer = (state = initState, action) => {
  switch(action.type) {
    case constant.CHANGE_INPUT:
      return {
        ...state,
        inputSearch: action.payload
      }

    case constant.CHANGE_BRANCH:
      return {
        ...state,
        selectedBranchIds: action.payload
      }
    case constant.CHANGE_TYPES:
      return {
        ...state,
        selectedTypeIds: action.payload
      }
    case constant.CHANGE_CATEGORY:
      return {
        ...state,
        categoryId: action.payload
      }
    case constant.CHANGE_PRICE_START:
      return {
        ...state,
        priceStart: action.payload
      }
    case constant.CHANGE_PRICE_END:
      return {
        ...state,
        priceEnd: action.payload
      }

    default:
      return state;
  }
}

export default FiltersReducer;
