import API from './ApiConfig';

export const Network = {
  getNews: pageNumber =>
    API.get(`/articlesearch.json?api-key=pdiRET3l7Osnyk7IHvSPl0ziiWFCFly1&q=technology&sort=newest&page=${pageNumber}`, {
    }),

};