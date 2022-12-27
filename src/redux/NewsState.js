import {createSlice} from '@reduxjs/toolkit';
import {utils} from '../res/utils';

export const newsState = createSlice({
  name: utils.reducerName,
  initialState: {
    isLoading: true,
    newsList: [],
    isError: false,
    page: 0,
    isFetchingNextPage: false,
  },
  reducers: {
    getNews: (state, action) => {
      (state.isLoading = true),
        (state.isFetchingNextPage = state.newsList.length > 0 ? true : false);
    },
    getNewsSuccess: (state, action) => {
      (state.isLoading = false),
        (state.isError = false),
        (state.newsList =
          state.newsList.length > 0
            ? [...state.newsList, ...action.payload]
            : action.payload),
        (state.page = state.page + 1);
      state.isFetchingNextPage = false;
    },
    getNewsFailure: (state, action) => {
      (state.isLoading = false),
        (state.isFetchingNextPage = false),
        (state.isError = true);
    },
  },
});

//Selectors
export const selectNews = state => state.news.newsList;
export const selectCurrentPage = state => state.news.page;
export const selectIsloading = state => state.news.isLoading;
export const selectIsFetchingNextPage = state => state.news.isFetchingNextPage;
export const selectIsError = state => state.news.isError;

//Actions
export const {getNews, getNewsSuccess, getNewsFailure} = newsState.actions;

export default newsState.reducer;
