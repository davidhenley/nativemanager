import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  IS_LOADING
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {

  // REMOVE THIS ON PRODUCTION
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: '' };
    case IS_LOADING:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, loading: false, error: 'Authentication Failed' };
    default:
      return state;
  }
}
