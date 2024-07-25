import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import resumeReducer from './resumeReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  resume: resumeReducer,
});
