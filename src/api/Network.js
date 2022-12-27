import API from './ApiConfig';
import {API_KEY} from '@env'

export const Network = {
  getNews: pageNumber =>
    API.get(`/articlesearch.json?api-key=${API_KEY}&q=technology&sort=newest&page=${pageNumber}`, {
    }),

};