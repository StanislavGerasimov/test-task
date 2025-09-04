import React, { useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Registration failed");

      alert("Registration successful! You can log in now.");
      navigate("/login");
    } catch (err) {
      alert("Error during registration");
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
            </div>
            <button className="loginButton" onClick={handleRegister}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
