import axios from "axios";
const URL = "http://www.omdbapi.com";
const apikey = "ae867a74";
export default {
  getSearchMovies(s, type, Y, page) {
    return axios({
      method: "get",
      url: URL,
      params: {
        apikey: apikey,
        s: s,
        type: type,
        Y: Y,
        page: page,
      },
    });
  },
  getFindDetails(id) {
    return axios({
      method: "get",
      url: URL,
      params: {
        apikey: apikey,
        i: id,
      },
    });
  },
};
