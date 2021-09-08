import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";

import AppBar from "./Components/AppBar";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPageMatUI";
import LoginPage from "./pages/LoginPageMatUI";
import ContactsPage from "./pages/ContactsPage";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./Components/UserMenu/PrivateRoute";
import PublicRoute from "./Components/UserMenu/PublicRoute";
import AuthNavigation from "./redux/auth/auth-selectors";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUse = useSelector(AuthNavigation.isFetchingCurrentUse);
  return (
    !isFetchingCurrentUse && (
      <>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/">
            <HomePage />
          </PublicRoute>
          <PublicRoute path="/register" restricted>
            <RegisterPage />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <LoginPage />
          </PublicRoute>
          <PrivateRoute path="/contacts">
            <ContactsPage />
          </PrivateRoute>
        </Switch>
      </>
    )
  );
}
export default App;