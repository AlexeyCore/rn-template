import { createReducer, createActions } from 'reduxsauce';

const actions = createActions({
  changeSignUpOptions: ['value'],
  changeSignUpEmail: ['value'],
  changeSignUpProfile: ['value'],
  changeLogInEmail: ['value'],
  turnToLogIn: ['value']
});

export const { Types, Creators } = actions;

const initialState = {
  signUpOptionsIsOpen: false,
  signUpEmailIsOpen: false,
  signUpProfileIsOpen: false,
  logInEmailIsOpen: false,
  logIn: false
};

const changeSignUpOptions = (state = initialState, action) => {
  const { value } = action;
  return { ...state, signUpOptionsIsOpen: value };
};

const changeSignUpEmail = (state = initialState, action) => {
  const { value } = action;
  return { ...state, signUpEmailIsOpen: value };
};

const changeSignUpProfile = (state = initialState, action) => {
  const { value } = action;
  return { ...state, signUpProfileIsOpen: value };
};

const turnToLogIn = (state = initialState, action) => {
  const { value } = action;
  return { ...state, logIn: value };
};

const changeLogInEmail = (state = initialState, action) => {
  const { value } = action;
  return { ...state, logInEmailIsOpen: value };
};

const handlers = {
  [Types.CHANGE_SIGN_UP_OPTIONS]: changeSignUpOptions,
  [Types.CHANGE_SIGN_UP_EMAIL]: changeSignUpEmail,
  [Types.CHANGE_SIGN_UP_PROFILE]: changeSignUpProfile,
  [Types.CHANGE_LOG_IN_EMAIL]: changeLogInEmail,
  [Types.TURN_TO_LOG_IN]: turnToLogIn
};

export default createReducer(initialState, handlers);
