import React from "react";
import { useSelector } from "react-redux";
import ROUTES from "../constants/routes";
import LoginPage from "./login";
import HomePage from "./home";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import { isAuthenticatedSelector } from "../store/selectors/auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  if (isAuthenticated) return children;
  return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
};

const AppPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.BASE}>
          <Route
            index
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.HOME}
            element={
              <RequireAuth>
                <HomePage />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.ALL}
            element={<Navigate to={ROUTES.LOGIN} replace />}
          />
        </Route>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppPages;
