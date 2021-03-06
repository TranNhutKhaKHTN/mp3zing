import *as type from '../../actionType/index'

const initialState = {
  dataPlayList: [],
  dataCardSinger: [],
  dataBoxMusic: [],
  musicToPlay: null,
  playing: false,
  checkdrag: false,
  loading: false
}

const PlayMusicReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_PLAYLIST:
      // console.log(action);
      return {
        ...state,
        dataPlayList: action.payload,
        // loading: true,
        musicToPlay: 0
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
        musicToPlay: action.payload,
        playing: true,
        checkdrag: false
      }
    case type.SET_PLAYING:
      // const playing=state.playing
      // console.log(action);
      return {
        ...state,
        playing: action.payload
      }
    case type.CHECK_DRAG:
      console.log("vô đây");
      return {
        ...state,
        checkdrag: true
      }
    default:
      return state
  }
}
export default PlayMusicReducer