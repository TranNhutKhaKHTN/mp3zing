import *as type from '../../actionType'
export const fetchPlayList = () => {
  return ({
    type: type.FETCH_PLAYLIST,
    payload: null
  })
}

export const fetchDataPlayMusic = () => {
  return ({
    type: type.FETCH_DATA_PLAYMUSIC,
    payload: null
  })
}

export const addCardSinger = (data) => {
  return ({
    type: type.ADD_LIST_CARDSINGER,
    payload: data
  })
}

export const addPlayList = (data) => {
  return ({
    type: type.ADD_PLAYLIST,
    payload: data
  })
}

export const addDataBoxMusic = (data) => {
  return ({
    type: type.ADD_DATA_BOXMUSIC,
    payload: data
  })
}

export const noneloading = () => {
  return ({
    type: type.NONE_LOADING,
    payload: null
  })
}

export const fetchData = () => {
  return ({
    type: type.FETCH_DATA,
    payload: null
  })
}

export const fetchSuccess = () => {
  return ({
    type: type.FETCH_SUCCESS,
    payload: null
  })
}

export const setMusicToPlay = (index) => {
  return ({
    type: type.SET_MUSIC_TO_PLAY,
    payload: index
  })
}

export const setPlaying = (i) => {
  return ({
    type: type.SET_PLAYING,
    payload: i
  })
}

export const checkDrag = () => {
  return {
    type: type.CHECK_DRAG,
    payload: null
  }
}