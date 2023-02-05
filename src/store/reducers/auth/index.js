import {
  SUCCESS_AUTHENTICATED,
  FAILURE_AUTHENTICATED,
} from "../../constants/auth";

const initialState = { isAuthenticated: false };

export function authReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case SUCCESS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
      };

    case FAILURE_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: false,
      };
  }
  return state;
}
