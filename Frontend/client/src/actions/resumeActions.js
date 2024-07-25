import axios from 'axios';
import { setAlert } from './alertActions';

export const getResumes = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/resumes');
    dispatch({ type: 'GET_RESUMES', payload: res.data });
  } catch (err) {
    dispatch(setAlert('Error fetching resumes', 'danger'));
  }
};

export const getResume = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/resumes/${id}`);
    dispatch({ type: 'GET_RESUME', payload: res.data });
  } catch (err) {
    dispatch(setAlert('Error fetching resume', 'danger'));
  }
};

export const addResume = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/resumes', formData);
    dispatch({ type: 'ADD_RESUME', payload: res.data });
    dispatch(setAlert('Resume created', 'success'));
  } catch (err) {
    dispatch(setAlert('Error creating resume', 'danger'));
  }
};

export const updateResume = (id, formData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/resumes/${id}`, formData);
    dispatch({ type: 'UPDATE_RESUME', payload: res.data });
    dispatch(setAlert('Resume updated', 'success'));
  } catch (err) {
    dispatch(setAlert('Error updating resume', 'danger'));
  }
};

export const deleteResume = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/resumes/${id}`);
    dispatch({ type: 'DELETE_RESUME', payload: id });
    dispatch(setAlert('Resume deleted', 'success'));
  } catch (err) {
    dispatch(setAlert('Error deleting resume', 'danger'));
  }
};

export const getAISuggestions = (jobDescription) => async (dispatch) => {
  try {
    const res = await axios.post('/api/ai/suggestions', { jobDescription });
    dispatch({ type: 'GET_AI_SUGGESTIONS', payload: res.data.suggestions });
  } catch (err) {
    dispatch(setAlert('Error getting AI suggestions', 'danger'));
  }
};
