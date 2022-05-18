import { CLEAR_INFO, FIND_INFO_ABOUT, LOAD_MORE_MOVIES, NO_MATCHES, SEARCH_MOVIES, START_LOADING } from "../types";

const initialState = {
  Movies: [],
  infoAbout:{},
  isLoading: false,
  areThereMatches: true
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES: {
      return {
        ...state,
        Movies: action.payload,
        isLoading: false,
        areThereMatches: true
      };
    }
    case LOAD_MORE_MOVIES: {
      return {
        ...state,
        Movies: [...state.Movies, ...action.payload],
        isLoading: false,
        areThereMatches: true
      };
    }
    case START_LOADING:{
      return {
        ...state,
        isLoading: true,
        areThereMatches: true
      }
    }
      case NO_MATCHES:{
      return {
        ...state,
        Movies:[],
        isLoading: false,
        areThereMatches: false,
      }
    }
    case FIND_INFO_ABOUT:{
      return {
        ...state,
        infoAbout:action.payload
      }
    }
    case CLEAR_INFO:{
      return{
        ...state,
        infoAbout:{}
      }
    }

    default:
      return state;
  }
};
