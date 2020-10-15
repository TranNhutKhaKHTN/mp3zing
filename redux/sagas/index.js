import { put, takeEvery, call } from 'redux-saga/effects'
import { addPlayList } from './../actions/playmusic'
import { getPlayList } from '../services/playmusic'

export function* helloSaga() {
  yield true;
  console.log('Hello Sagas!')
}

function* fetchPlayList() {
  let playList = yield call(getPlayList)
  console.log(playList)
  const action = yield addPlayList(playList);
  yield put(action)
}

function* rootSaga() {
  yield takeEvery('FETCH_DATA_PLAYMUSIC', fetchPlayList)
}
export default rootSaga