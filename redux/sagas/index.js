import { takeEvery } from 'redux-saga/effects'

export function* helloSaga() {
  yield true;
  console.log('Hello Sagas!')
}

function* rootSaga() {
  yield takeEvery('FETCH_PLAYLIST', helloSaga)
}
export default rootSaga