import { combineReducers } from 'redux';
import loginModals from './loginModals';
import main from './main';

const rootReducer = combineReducers({
  loginModals,
  main
});

export default rootReducer;

