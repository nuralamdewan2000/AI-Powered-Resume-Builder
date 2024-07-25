import axios from 'axios';
import { setAlert } from './alertActions';
import setAuthToken from '../utils/setAuthToken';

export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/register', formData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL' });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth/login', formData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    dispatch(loadUser());
  } catch (err) {
    dispatch({ type: 'LOGIN_FAIL' });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth/user');
    dispatch({ type: 'USER_LOADED', payload: res.data });
  } catch (err) {
    dispatch({ type: 'AUTH_ERROR' });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
