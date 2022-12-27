import {call, put, takeLatest, all} from 'redux-saga/effects';
import {Network} from '../api/Network';
import {getNews, getNewsFailure, getNewsSuccess} from '../redux/NewsState';

function* handleNewsRequest(action) {
  try {
    const newsResponse = yield call(Network.getNews, action.payload);
    if (newsResponse?.status === 200) {
      const res = newsResponse?.data?.response?.docs;
      yield put(getNewsSuccess(res));
    } else {
      yield put(getNewsFailure());
    }
  } catch (e) {
    yield put(getNewsFailure());
  }
}

export function* newsSaga() {
  yield all([takeLatest(getNews.type, handleNewsRequest)]);
}
