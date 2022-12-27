import {all} from 'redux-saga/effects';
import {newsSaga} from './NewsSaga';

export default function* rootSagas() {
  yield all([newsSaga()]);
}
