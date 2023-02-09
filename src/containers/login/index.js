import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "@components/common/input";
import AuthController from "@controllers/auth";

const MemorizedInput = React.memo(Input);

const LoginContainer = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useCallback(
    (name, pass) => {
      AuthController(dispatch)
        .login(name, pass)
        .then((isAuth) => {
          isAuth ? navigate("/home") : setShowError(true);
        });
    },
    [dispatch]
  );

  return (
    <div className="login-form-bd">
      <div className="form-wrapper">
        <div className="form-container">
          <h1> Please Login</h1>
          <form>
            <div className="form-control">
              <MemorizedInput
                type="text"
                labelName={"Email"}
                handleChange={setUserName}
              />
            </div>

            <div className="form-control">
              <MemorizedInput
                type="password"
                labelName={"Password"}
                handleChange={setPassword}
              />
            </div>
            <button
              type="button"
              className="login-btn"
              onClick={() => login(userName, password)}
            >
              Login
            </button>
            {showError && <div>wrote email:test - password:test for login</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
