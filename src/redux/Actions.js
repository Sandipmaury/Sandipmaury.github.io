import axios from "axios";
import * as type from "./ActionType";

const isDataLoding = {
  type: type.GET_DATA_REQUEST,
};

const isLodingSuccess = (payload) => {
  return {
    type: type.GET_DATA_SUCCESS,
    payload: payload,
  };
};

const isLodingFailed = {
  type: type.GET_DATA_FAILURE,
};

export const getData = () => async (dispatch) => {
  dispatch(isDataLoding);
  const source = axios.CancelToken.source();
  return await axios
    .get(`https://633adc9e471b8c395576dc00.mockapi.io/projects`, {
      cancelToken: source.token,
    })
    .then(({ data }) => {
      dispatch(isLodingSuccess(data));
    })
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log("caught cancel");
      } else throw err;
      dispatch(isLodingFailed);
    });
};
