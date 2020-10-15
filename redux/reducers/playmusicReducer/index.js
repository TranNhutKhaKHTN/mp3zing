import *as type from './../../consts/index'

const initialState = {
  dataPlayList: [],
  dataCardSinger: [],
  loading: false
}

const PlayMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_PLAYLIST:
      console.log(action);
      return {
        dataPlayList: action.payload
      }
    case type.SET_LOADING:
      return {
        loading: true
      }
    default:
      return state
  }
}
export default PlayMusicReducer