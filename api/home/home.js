import API from '../../plugins/axios'
export default {
  getIndex: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/film/getIndex', params);
  },
  films: params => {
    return API.get(process.env.baseUrl + '/meetingfilm/film/films', params);
  }
}
