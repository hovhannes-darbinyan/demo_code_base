import AuthApi from "../../api/auth";
import {
  successAuthenticated,
  failureAuthenticated,
} from "../../store/actions/auth";

const { refreshToken, signIn } = AuthApi();

const AuthController = (dispatch) => {
  const login = (userName, password) => {
    return signIn(userName, password)
      .then((response) => {
        //TODO save tokens into browser storage
        dispatch(successAuthenticated());
        return true;
      })
      .catch(() => {
        dispatch(failureAuthenticated());
        return false;
      });
  };
  return { login };
};

export default AuthController;
