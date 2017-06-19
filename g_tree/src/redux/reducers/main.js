import { createReducer, createActions } from 'reduxsauce';

const actions = createActions({
  initEvent: ['FBase'],
});

export const { Types, Creators } = actions;

const initialState = {
  isLoading: false,
  logInNavigation: {},
  navigation: {}
};

const initEvent = (state = initialState, action) => ({
  ...state,
});

const handlers = {
  [Types.INIT_EVENT]: initEvent,
};

export default createReducer(initialState, handlers);
