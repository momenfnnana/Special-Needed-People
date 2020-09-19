import createDataContext from "./createDataContext";

let initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

const SignIn = (dispatch) => async (data) => {
  await dispatch({ type: "SIGN_IN", payload: data });
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    SignIn,
  },
  initialState
);
