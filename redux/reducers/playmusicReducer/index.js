import *as type from './../../consts/index'

const initialState = {
  dataPlayList: [],
  dataCardSinger: [],
  dataBoxMusic: [],
  loading: false
}

const PlayMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_PLAYLIST:
      // console.log(action);
      return {
        ...state,
        dataPlayList: action.payload
      }
    case type.ADD_LIST_CARDSINGER:
      return {
        ...state,
        dataCardSinger: action.payload
      }
    case type.SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case type.ADD_DATA_BOXMUSIC:
      // console.log(action.payload)
      return {
        ...state,
        dataBoxMusic: action.payload
      }
    default:
      return state
  }
}
export default PlayMusicReducer