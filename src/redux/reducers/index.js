import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Common from './Common';
import Users from './Users';

export default history =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
    usersReducer: Users,
  });