import axios from "axios";
import { GET_USERS } from "../../constants/ActionTypes";
import { fetchError, fetchStart, fetchSuccess } from './Common';

export const getUsers = (callbackFun) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
          dispatch(fetchSuccess());
          dispatch({ type: GET_USERS, payload: response.data });
          if (callbackFun) callbackFun(response.data);
      })
      .catch((error) => {
        dispatch(fetchError("There was something issue in responding server"));
      });
  };
};
