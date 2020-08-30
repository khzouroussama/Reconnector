import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import {Link} from "react-router-dom"
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
        history.push("/home");
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
  const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
  }
  return (
    <div className="container" style={styles}>
    <h1 className="white-text">Login</h1>
    <form  onSubmit={handleLogin} style={{
        width: "300px"
    }}>
      <div className="input-field col s12">
        <input type="email" id="email" name="email" className="validate white-text" />
        <label className="white-text" htmlFor="email" data-error="wrong" data-success="right">Email</label>
      </div>
      <div className="input-field col s12">
        <input type="password" id="password" name="password" className="validate white-text" />
        <label className="white-text" htmlFor="password">Password</label>
      </div>
      <br />
      
      <button type="submit" class="waves-effect waves-light red accent-2 btn-large"> Login </button>
      {/* <button type="submit" className="waves-effect #eceff1 blue-grey lighten-5 black-text btn" style={{padding: "0 32px", border: "0"}}>Login</button> */}
      &nbsp;&nbsp;&nbsp;&nbsp;
      
      <Link to="/register" class="waves-effect waves-light red accent-2 btn-large"> Register </Link>
    </form>
    </div>
  );
};

export default withRouter(Login);