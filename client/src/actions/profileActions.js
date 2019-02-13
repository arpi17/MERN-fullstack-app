import axios from 'axios';

import {
  GET_PROFILE,
  PROFILE_LOADING,
  GET_ERRORS,
  CLEAR_CURRENT_PROFILE,
  SET_CURRENT_USER
} from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/profile')
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        profile: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        profile: {}
      });
    });
};

// Create profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        errors: err.response.data
      })
    );
};

// Delete account and profile
export const deleteAccount = () => dispatch => {
  if (window.confirm('Are you sure? This can not be reversed!')) {
    axios
      .delete('/api/profile')
      .then(res => {
        dispatch({
          type: SET_CURRENT_USER,
          user: {}
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          errors: err.response.data
        })
      );
  }
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear loading
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
