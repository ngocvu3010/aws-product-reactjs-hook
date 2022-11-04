import * as constant from '../constants/filter';

export const inputSearchChange = (data) => {
  return {
    type: constant.CHANGE_INPUT,
    payload: data
  }
}

export const selectedBranchIdsChange = (data) => {
  return {
    type: constant.CHANGE_BRANCH,
    payload: data
  }
}

export const selectedTypeIdsChange = (data) => {
  return {
    type: constant.CHANGE_TYPES,
    payload: data
  }
}

export const categoryIdChange = (data) => {
  return {
    type: constant.CHANGE_CATEGORY,
    payload: data
  }
}

export const priceStartChange = (data) => {
  return {
    type: constant.CHANGE_PRICE_START,
    payload: data
  }
}

export const priceEndChange = (data) => {
  return {
    type: constant.CHANGE_PRICE_END,
    payload: data
  }
}
