import {
  SUCCESS_AUTHENTICATED,
  FAILURE_AUTHENTICATED,
} from "../../constants/auth";

export const successAuthenticated = () => ({
  type: SUCCESS_AUTHENTICATED,
});

export const failureAuthenticated = () => ({ type: FAILURE_AUTHENTICATED });
