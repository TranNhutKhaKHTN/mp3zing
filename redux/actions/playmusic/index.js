import *as type from './../../consts'
export const fetchPlayList = () => {
  return ({
    type: type.FETCH_PLAYLIST,
    payload: null
  })
}

export const addPlayList = (data) => {
  return ({
    type: type.ADD_PLAYLIST,
    payload: data
  })
}

export const fetchDataPlayMusic = () => {
  return ({
    type: type.FETCH_DATA_PLAYMUSIC,
    payload: null
  })
}