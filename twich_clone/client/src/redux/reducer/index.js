import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "../action";
import { reducer as reduxform } from "redux-form";

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const login = (state = INTIAL_STATE, action) => {
  if (action.type === LOGIN) {
    return { ...state, isSignedIn: true, userId: action.payload };
  }
  return state;
};
const logout = (state = INTIAL_STATE, action) => {
  if (action.type === LOGOUT) {
    return { ...state, isSignedIn: false, userId: null };
  }
  return state;
};

const MainReducer = combineReducers({
  login: login,
  logout: logout,
  // redux-form wrapper
  form: reduxform,
});

export default MainReducer;
