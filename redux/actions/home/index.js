import *as type from './../../consts'
export const AddPlayList = (data) => {
  return ({
    type: type.ADD_PLAYLIST,
    payload: data
  })
}