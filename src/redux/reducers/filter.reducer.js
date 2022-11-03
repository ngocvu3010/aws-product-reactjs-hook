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
    case 'filters/inputSearchChange':
      return {
        ...state,
        inputSearch: action.payload
      }

    default:
      return state;
  }
}

export default FiltersReducer;
