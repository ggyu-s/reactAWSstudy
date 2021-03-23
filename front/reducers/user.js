export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpdate: {},
  loginData: {},
};

export const loginAction = (data) => ({
  type: "LOGIN",
  data,
});
export const logoutAction = (data) => ({
  type: "LOGOUT",
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
