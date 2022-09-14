export const CREATE_POLICY = "CREATE_POLICY";
export const DELETE_POLICES = "DELETE_POLICES";
export const CREATE_CLAIM = "CREATE_CLAIM";

const createploicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletepolicy = (name) => {
  return {
    type: "DELETE_POLICES",
    payload: {
      name: name,
    },
  };
};

const createclaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amountOfMoneyToCollect,
    },
  };
};

export { createclaim, deletepolicy, createploicy };
