import {configureStore, combineReducers} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSagas from '../sagas/index';
import newsReducer from './NewsState'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['news']
}
const reducer = combineReducers({
  news: newsReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer)

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:persistedReducer,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({thunk: false}),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSagas);
export default store;