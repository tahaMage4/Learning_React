import { combineReducers } from "redux";

import { CREATE_POLICY, DELETE_POLICES, CREATE_CLAIM } from "../action";

// reducer(department) == acount , policesmaker , calimHistory
// when the reducer call first time undefine se bachne ke lye [] kis ha

// global reducer
// const initialReducer = () => {
//   return [
//     (oldListhistory = [{ name: "tha", title: "taha" }]),
//     (bagofMoney = 100),
//     (listofPolices = [
//       {
//         polices: 44,
//         policyname: "name",
//       },
//     ]),
//   ];
// };

const INITIAL_STATE = {};

// CalimHistory Department
const calimHistory = (oldListhistory = [], action) => {
  if (action.type === CREATE_CLAIM) {
    // we care that policy
    return [...oldListhistory, action.payload];
  }
  // we dont care
  return oldListhistory;
};

// Accounting Department
const accounting = (bagofMoney = 100, action) => {
  if (action.type === CREATE_CLAIM) {
    // we care that policy
    return bagofMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === CREATE_POLICY) {
    // No Case
    //  yes
    return bagofMoney + action.payload.amount;
  }

  //   No
  return bagofMoney;
};

// Polices Department
const polices = (
  listofPolices = ["tha", 22, { name: "tha", age: 20 }],
  action
) => {
  if (action.type === CREATE_POLICY) {
    return [...listofPolices, action.payload.name];
  } else if (action.type === DELETE_POLICES) {
    return listofPolices.filter((name) => name !== action.payload.name);
  }

  return listofPolices;
};

const MainReducer = combineReducers({
  calimHistory: calimHistory,
  accounting: accounting,
  polices: polices,
});

export default MainReducer;
