import { createStore } from "redux";
import MainReducer from "../redux/reducer";

const store = createStore(
  MainReducer,
  // for reduxdevtool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
