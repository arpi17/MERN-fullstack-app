import axios from 'axios';

import {
  GET_PROFILE,
  GET_PROFILES,
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

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        profile: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PROFILE,
        profile: null
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

// Add Experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        errors: err.response.data
      })
    );
};

// Add Education
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post('api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        errors: err.response.data
      })
    );
};

// Delete experience
export const deleteExperience = id => dispatch => {
  axios
    .delete(`api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        profile: res.data,
        isLoading: true
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        errors: err.response.data
      })
    );
};

// Delete education
export const deleteEducation = id => dispatch => {
  axios
    .delete(`api/profile/education/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        profile: res.data,
        isLoading: true
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        errors: err.response.data
      })
    );
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('api/profile/all')
    .then(res =>
      dispatch({
        type: GET_PROFILES,
        profiles: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILES,
        profiles: null
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
