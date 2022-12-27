import API from './ApiConfig';
import {utils} from './../res/utils';

export const Network = {
  getNews: pageNumber =>
    API.get(
      `/articlesearch.json?api-key=${utils.API_KEY}&q=technology&sort=newest&page=${pageNumber}`,
      {},
    ),
};
