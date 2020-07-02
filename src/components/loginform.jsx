import React from "react";
import axios from "axios";
import FormData from "form-data";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");

  var history = new useHistory();

  function onChangeHandler(event) {
    setUsername1(event.target.value);
  }

  function onChangeHandler1(event) {
    setPassword1(event.target.value);
  }

  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username !== "" && password !== "") {
      var data = new FormData();
      data.append("username", username);
      data.append("password", password);
      var config = {
        method: "post",
        url: "https://djreacttodoapi.herokuapp.com/accounts/login/",
        headers: {
          ...data.getHeaders,
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          localStorage.setItem("token", `Token ${response.data["token"]}`);
          history.push("/");
        })
        .catch(function () {
          setUsername("wrong username");
          setPassword("wrong password");
          setPassword1("");
          setUsername1("");
        });
    }
  }

  if (!localStorage.getItem("token")) {
    return (
      <div className="vertical-center">
        <div className="container-fluid">
          <div className="text-center mb-4">
            <h2>Task App - PWA</h2>
          </div>

          <div className="mx-auto form-group row">
            <div className="col-lg-3 col-sm-8 col-md-8 mx-auto">
              <input
                type="text"
                className="form-input"
                id="username"
                placeholder={username}
                value={username1}
                onChange={onChangeHandler}
              />
            </div>
          </div>

          <div className="mx-auto form-group row">
            <div className="col-lg-3 col-sm-8 col-md-8 mx-auto">
              <input
                type="password"
                className="form-input"
                id="password"
                placeholder={password}
                value={password1}
                onChange={onChangeHandler1}
              />
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-md mb-3" type="submit" onClick={login}>
              Login
            </button>
            <div>
              <p className="d-inline">Not a member? </p>
              <a href="/register"> Register</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{history.push("/")}</>;
};

export default LoginForm;
