import * as way from "./ActionType";
import { initialState } from "./InitialState";

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case way.GET_DATA_REQUEST:
      return { ...state, isLoding: true };
    case way.GET_DATA_SUCCESS:
      return { ...state, isLoding: false, data: payload };
    case way.GET_DATA_FAILURE:
      return { ...state, isLoding: false, isError: true, data: [] };
    default:
      return state;
  }
};
