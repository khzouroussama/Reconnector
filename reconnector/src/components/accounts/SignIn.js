import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "./auth";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home"  />;
  }

  return (
    <div className="container">
    <h1 className="white-text">Login</h1>
    <form  onSubmit={handleLogin}>
      <div className="input-field col s12">
        <input type="email" id="email" name="email" className="validate white-text" />
        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
      </div>
      <div className="input-field col s12">
        <input type="password" id="password" name="password" className="validate white-text" />
        <label htmlFor="password">Password</label>
      </div>
    </form>
    </div>
  );
};

export default withRouter(Login);