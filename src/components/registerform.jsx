import React from "react";
import { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState("username(more than 4 chars)");
  const [username1, setUsername1] = useState("");

  const [password] = useState("password(more than 8 chars)");
  const [password1, setPassword1] = useState("");

  const [email, setEmail] = useState("email");
  const [email1, setEmail1] = useState("");

  const [confirmPass] = useState("confirm password");
  const [confirmPass1, setConfirmPass1] = useState("");

  var history = useHistory();

  const [checkun, setCheckUn] = useState(false);
  const [checkem, setCheckEm] = useState(false);
  const [checkcp, setCheckCp] = useState(false);

  function onChangeHandlerUsrname(event) {
    setUsername1(event.target.value);
    var usrname = document.getElementById("username").value;
    if (usrname.length >= 4) {
      document.getElementById("username").style.border = "3px solid #79d70f";
      setCheckUn(true);
    } else {
      document.getElementById("username").style.border = "3px solid #d32626";
    }
  }

  var mailformat = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  function onChangeHandlerEmail(event) {
    setEmail1(event.target.value);
    var eml = document.getElementById("email").value;
    if (eml.match(mailformat)) {
      document.getElementById("email").style.border = "3px solid #79d70f";
      setCheckEm(true);
    } else {
      document.getElementById("email").style.border = "3px solid #d32626";
    }
  }

  function onChangeHandlerPass(event) {
    setPassword1(event.target.value);
    var p = document.getElementById("password").value;
    var cp = document.getElementById("cpassword").value;
    if (p === cp && p.length >= 8) {
      document.getElementById("cpassword").style.border = "3px solid #79d70f";
      document.getElementById("password").style.border = "3px solid #79d70f";
      setCheckCp(true);
    } else {
      document.getElementById("cpassword").style.border = "3px solid #d32626";
      document.getElementById("password").style.border = "3px solid #d32626";
    }
  }

  function onChangeHandlerPass1(event) {
    setConfirmPass1(event.target.value);
    var p = document.getElementById("password").value;
    var cp = document.getElementById("cpassword").value;
    if (p === cp && p.length >= 8) {
      document.getElementById("cpassword").style.border = "3px solid #79d70f";
      document.getElementById("password").style.border = "3px solid #79d70f";
      setCheckCp(true);
    } else {
      document.getElementById("cpassword").style.border = "3px solid #d32626";
      document.getElementById("password").style.border = "3px solid #d32626";
    }
  }

  function register() {
    if (checkcp === true && checkem === true && checkun === true) {
      var username = document.getElementById("username").value;
      var email = document.getElementById("email").value;
      var pass = document.getElementById("password").value;
      var cpass = document.getElementById("cpassword").value;

      var data = new FormData();
      data.append("username", username);
      data.append("password", pass);
      data.append("password2", cpass);
      data.append("email", email);

      var config = {
        method: "post",
        url: "https://djreacttodoapi.herokuapp.com/accounts/register/",
        headers: {
          ...data.getHeaders,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          if (response.data["username"][0] === "A user with that username already exists.") {
            setUsername("username taken");
            setUsername1("");
          }
          else {
            history.push("/login");
          }
        })
        .catch(function (error) {
            console.log(error);
          setEmail("email taken");
          setEmail1("");
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
                placeholder={username}
                value={username1}
                onChange={onChangeHandlerUsrname}
                id="username"
              />
            </div>
          </div>
  
          <div className="mx-auto form-group row">
            <div className="col-lg-3 col-sm-8 col-md-8 mx-auto">
              <input
                type="email"
                className="form-input"
                placeholder={email}
                value={email1}
                onChange={onChangeHandlerEmail}
                id="email"
              />
            </div>
          </div>
  
          <div className="mx-auto form-group row">
            <div className="col-lg-3 col-sm-8 col-md-8 mx-auto">
              <input
                type="password"
                className="form-input"
                placeholder={password}
                value={password1}
                onChange={onChangeHandlerPass}
                id="password"
              />
            </div>
          </div>
  
          <div className="mx-auto form-group row">
            <div className="col-lg-3 col-sm-8 col-md-8 mx-auto">
              <input
                type="password"
                className="form-input"
                placeholder={confirmPass}
                value={confirmPass1}
                onChange={onChangeHandlerPass1}
                id="cpassword"
              />
            </div>
          </div>
  
          <div className="text-center">
            <button className="btn btn-md mb-3" onClick={register}>
              Register
            </button>
            <div>
              <p className="d-inline">Already a member? </p>
              <a href="/login"> Login</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{history.push("/")}</>;
  
};

export default RegisterForm;
