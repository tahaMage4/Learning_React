export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const loginUser = (userId) => {
  return {
    type: "LOGIN",
    payload: {
      userId,
    },
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export { loginUser, logoutUser };
