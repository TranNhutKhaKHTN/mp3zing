import *as types from './../../actionType'

export const addKeyWord = (key) => {
  return {
    type: types.ADD_KEYWORD,
    payload: key
  }
}