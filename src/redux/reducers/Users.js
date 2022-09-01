import {
    GET_USERS,
  } from '../../constants/ActionTypes';

  const INIT_STATE = {
    users: [],
    currentUser: null
  };

  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_USERS: {
        return {
          ...state,
          users: action.payload,
        };
      }
      default:
        return state;
    }
  };