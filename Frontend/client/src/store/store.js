import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../reducers/authReducer';
import resumeReducer from '../reducers/resumeReducer';
import alertReducer from '../reducers/alertReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  resume: resumeReducer,
  alert: alertReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
