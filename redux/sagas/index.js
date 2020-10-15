import { put, takeEvery, call, all } from 'redux-saga/effects'
import { addPlayList, addCardSinger, addDataBoxMusic } from './../actions/playmusic'
import { getPlayList, getListCardSinger, getListBoxMusic } from '../services/playmusic'

export function* helloSaga() {
  yield true;
  console.log('Hello Sagas!')
}

function* fetchDataPlayMusic() {
  const [playList, ListCardSinger, listBoxMusic] = yield all([
    call(getPlayList),
    call(getListCardSinger),
    call(getListBoxMusic)
  ])
  const actionaddplaylist = addPlayList(playList);
  yield put(actionaddplaylist)
  const actionAddCardSinger = addCardSinger(ListCardSinger);
  yield put(actionAddCardSinger);
  const actionAddListBoxMusic = addDataBoxMusic(listBoxMusic);
  yield put(actionAddListBoxMusic);
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_PLAYMUSIC', fetchDataPlayMusic)
}
export default rootSaga