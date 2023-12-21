import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState();
  const gotoRegister = () => {
    navigate("/register");
  };
  const gotouserdetails = (e) => {
    e.preventDefault();
    axios
      .get("/login/login", {
        params: { email: login.email, password: login.password },
      })
      .then((response) => {
        localStorage.setItem("id",response.data?.id);
        if (response.data?.role === "User") navigate("/userdetails");
        else if (response.data?.role === "Admin") navigate("/admindetails");
        else alert("Invalid Credentials");
      });
    navigate("/userdetails");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  return (
    <div className="login-box">
      <h1 className="login-box-text">Login</h1>
      <div className="login-container">
        <div className="login-inputs">
          <h4>
            Email<span>*</span>
          </h4>
          <input type="text" name="email" onChange={handleChange} />
          <h4>
            Password<span>*</span>
          </h4>
          <input type="password" name="password" onChange={handleChange} />
          <p>
            I have already an Account!{" "}
            <u onClick={gotoRegister}>Register Now</u>
          </p>
        </div>
        <div className="login-button">
          <button onClick={gotouserdetails}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
