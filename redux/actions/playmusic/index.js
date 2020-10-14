import *as type from './../../consts'
export const fetchPlayList = () => {
  return ({
    type: type.FETCH_PLAYLIST,
    payload: []
  })
}