import *as types from './../../actionType'
const initialState = {
  keyword: null
}
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    default:
      return state
  }
}
export default searchReducer