import React, { useState, useEffect } from "react";
import axios from "axios";

const NavBar = (props) => {
  const [active, setActive] = useState();
  const [username, setUsername] = useState("Tasks");

  useEffect(() => {
    if (props.active === "login") {
      setActive(
        <>
          <li className="nav-item mr-5">
            <a className="nav-link active" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link default" href="/register">
              Register
            </a>
          </li>
        </>
      );
    } else if (props.active === "home") {
      var token = localStorage.getItem("token");
      var config = {
        method: "get",
        url: "https://djreacttodoapi.herokuapp.com/tasks/",
        headers: {
          Authorization: `${token}`,
        },
      };
      axios(config).then((response) => {
        setUsername(response.data['username']);
      })
      setActive(
        <>
          <li className="nav-item mr-5">
            <a
              className="nav-link active"
              href="/login"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </a>
          </li>
        </>
      );
    } else {
      setActive(
        <>
          <li className="nav-item mr-5">
            <a className="nav-link default" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link active" href="/register">
              Register
            </a>
          </li>
        </>
      );
    }
  }, [props]);

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-sm">
        <a className="navbar-brand default" href="/">
          Hello, {username}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">{active}</ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
