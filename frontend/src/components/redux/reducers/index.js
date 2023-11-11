import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  loginDetails: loginReducer,
  // Add other reducers if needed
});

export default rootReducer;
