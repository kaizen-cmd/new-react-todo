import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";

const Task = (props) => {
  const [val, setVal] = useState(props.task);
  const [done, setDone] = useState("");
  const [jd, setJd] = useState(props.isDone);
  const [strikeclass, setStrikeclass] = useState("");
  var token = localStorage.getItem("token");

  useEffect(() => {
    if (props.isDone === true) {
      setDone(<i className="far fa-check-square"></i>);
      setStrikeclass("strikeout");
    } else {
      setDone(<i className="far fa-square"></i>);
      setStrikeclass("");
    }
    // eslint-disable-next-line
  }, []);

  function taskedithandler(e) {
    setVal(e.target.value);
    var data = new FormData();
    data.append("id", `${props.id}`);
    data.append('isdone', `${jd}`);
    data.append('task', document.getElementById(`${props.id}taskin`).value);
      var config = {
        method: "put",
        url: "https://djreacttodoapi.herokuapp.com/tasks/",
        headers: {
          Authorization: `${token}`,
          ...data.getHeaders,
        },
        data: data,
      };

      axios(config);
  }

  function doneHandler() {
    var data = new FormData();
    data.append("id", `${props.id}`);
    data.append('task', `${props.task}`);

    if (jd) {
      setDone(<i className="far fa-square"></i>);
      setJd(false);
      setStrikeclass("");
      data.append('isdone', "false");
      var config = {
        method: "put",
        url: "https://djreacttodoapi.herokuapp.com/tasks/",
        headers: {
          Authorization: `${token}`,
          ...data.getHeaders,
        },
        data: data,
      };

      axios(config);
    } else {
      setDone(<i className="far fa-check-square"></i>);
      setJd(true);
      setStrikeclass("strikeout");
      data.append('isdone', "true");
      // eslint-disable-next-line
      var config = {
        method: "put",
        url: "https://djreacttodoapi.herokuapp.com/tasks/",
        headers: {
          Authorization: `${token}`,
          ...data.getHeaders,
        },
        data: data,
      };

      axios(config);
    }
  }

  function deleteHandler() {
    var data = new FormData();
    data.append("id", `${props.id}`);
    var config = {
      method: "delete",
      url: "https://djreacttodoapi.herokuapp.com/tasks/",
      headers: {
        Authorization: `${token}`,
        ...data.getHeaders,
      },
      data: data,
    };

    axios(config);
    document.getElementById(`${props.id}`).style.display = "none";
  }

  return (
    <div className="taskdiv" id={props.id}>
      <input
        id={props.id + "taskin"}
        type="text"
        value={val}
        onChange={taskedithandler}
        className={strikeclass}
      />
      <div className="taskdivbuttons">
        <button id="donebtn" onClick={doneHandler}>
          {done}
        </button>
        <button onClick={deleteHandler}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
