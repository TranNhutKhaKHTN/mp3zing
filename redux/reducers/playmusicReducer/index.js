import *as type from '../../actionType/index'

const initialState = {
  dataPlayList: [],
  dataCardSinger: [],
  dataBoxMusic: [],
  musicToPlay: null,
  loading: false
}

const PlayMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_PLAYLIST:
      // console.log(action);
      return {
        ...state,
        dataPlayList: action.payload,
        loading: true
      }
    case type.ADD_LIST_CARDSINGER:
      return {
        ...state,
        dataCardSinger: action.payload,
        loading: true
      }
    case type.FETCH_DATA:
      return {
        ...state,
        loading: true
      }
    case type.FETCH_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case type.ADD_DATA_BOXMUSIC:
      // console.log(action.payload)
      return {
        ...state,
        dataBoxMusic: action.payload,
        loading: true
      }
    case type.SET_MUSIC_TO_PLAY:
      return {
        ...state,
        musicToPlay: action.payload
      }
    default:
      return state
  }
}
export default PlayMusicReducer