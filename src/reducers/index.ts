import {combineReducers} from 'redux';
import userDataReducer from './userDataReducer';
import currentUserReducer from './currentUserReducer';

const allReducers = combineReducers({
  userData: userDataReducer,
  currentUser: currentUserReducer
});

export default allReducers;
