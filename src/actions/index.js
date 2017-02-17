import firebase from 'firebase';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  IS_LOADING
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text.trim()
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => {
            dispatch({ type: LOGIN_USER_FAIL });
          });
      });
  };
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
};
