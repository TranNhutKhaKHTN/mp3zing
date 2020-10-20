import { put, takeEvery, call, all, delay } from 'redux-saga/effects'
import { addPlayList, addCardSinger, addDataBoxMusic, fetchData, fetchSuccess } from './../actions/playmusic'
import { getPlayList, getListCardSinger, getListBoxMusic } from '../services/playmusic'

export function* helloSaga() {
  yield true;
  console.log('Hello Sagas!')
}

function* fetchDataPlayMusic() {

  const actionFetchData = fetchData();
  yield put(actionFetchData)
  yield delay(300)
  const [playList, ListCardSinger, listBoxMusic] = yield all([
    call(getPlayList),
    call(getListCardSinger),
    call(getListBoxMusic)
  ])

  //< có thể gộp lại thành 1 action addDataPlayMusicPage>
  const actionaddplaylist = addPlayList(playList);
  yield put(actionaddplaylist)

  const actionAddCardSinger = addCardSinger(ListCardSinger);
  yield put(actionAddCardSinger);

  const actionAddListBoxMusic = addDataBoxMusic(listBoxMusic);
  yield put(actionAddListBoxMusic);
  //</> 

  const getsuccess = fetchSuccess();
  yield put(getsuccess)
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_PLAYMUSIC', fetchDataPlayMusic)
}
export default rootSaga