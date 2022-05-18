import movies from "../../api/apiRequests/movies";
import {
  CLEAR_INFO,
  FIND_INFO_ABOUT,
  LOAD_MORE_MOVIES,
  NO_MATCHES,
  SEARCH_MOVIES,
  SEARCH_MOVIES_ERROR,
  START_LOADING,
} from "../types";

export const SearchMovies = (s = "", page = 1, type = "", Y = "") => {
  return async (dispatch) => {
    try {
      const res = await movies.getSearchMovies(s, type, Y, page);
      if (res.data.Response == "False") {
        dispatch({
          type: NO_MATCHES,
          payload: res.data.Search,
        });
      } else if (page === 1) {
        dispatch({
          type: SEARCH_MOVIES,
          payload: res.data.Search,
        });
      } else {
        dispatch({
          type: LOAD_MORE_MOVIES,
          payload: res.data.Search,
        });
      }
    } catch (e) {
      dispatch({
        type: SEARCH_MOVIES_ERROR,
        payload: console.log(e),
      });
    }
  };
};
export const StartLoading = (boolean) => {
  return {
    type: START_LOADING,
    payload: boolean,
  };
};
export const FindDetails = (Id) => {
  return async (dispatch) => {
    try {
      const res = await movies.getFindDetails(Id);
      // console.log(res.data);
      dispatch({
        type: FIND_INFO_ABOUT,
        payload: res.data,
      });
    } catch (e) {
      alert("Error");
    }
  };
};
export const ClearInfo= ()=>{
  return {
    type: CLEAR_INFO,
  };
}
