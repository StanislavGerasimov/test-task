import React, { useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/UserSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();

      dispatch(loginSuccess({ email, token: data.access_token }));

      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
      console.error(err);
    }
  };

  return (
    <>
      <header className="header"></header>
      <div className="pageDiv">
        <div className="photoDiv"></div>
        <div className="loginSection">
          <div className="loginDiv">
            <p className="bigText">Login</p>
            <div className="inputBlock">
              <p className="inputText">Email</p>
              <input
                className="inputField"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputBlock">
              <p className="inputText">Password</p>
              <input
                className="inputField"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="forgotText">Forgot Password?</p>
            </div>
            <button className="loginButton" onClick={handleLogin}>
              Sign In
            </button>
            <p className="signUpText">
              Don't have an account?{" "}
              <span className="signUpLink" onClick={() => navigate("/signup")}>
                {" "}
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
