import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Task from "./task";
import axios from "axios";
import FormData from "form-data";

const TaskBox = () => {
  var history = useHistory();

  const [taskarray, setTaskarray] = useState([]);
  const [ntaskarray, setnTaskarray] = useState([]);
  const [val, setVal] = useState("");

  var token = localStorage.getItem("token");

  var config = {
    method: "get",
    url: "https://djreacttodoapi.herokuapp.com/tasks/",
    headers: {
      Authorization: `${token}`,
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setTaskarray(response.data);
      })
      // eslint-disable-next-line
  }, []);

  function changehandler(e) {
    setVal(e.target.value);
  }

  function taskcreator() {
    var task = document.getElementById("newtaskin").value;
    if (task !== "") {
      var data = new FormData();
      data.append("task", `${task}`);

      var config = {
        method: "post",
        url: "https://djreacttodoapi.herokuapp.com/tasks/",
        headers: {
          Authorization: `${token}`,
          ...data.getHeaders,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          setnTaskarray((taskarray) => {
            return [...taskarray, response.data];
          });
          setVal("");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  if (localStorage.getItem("token")) {
    return (
      <div>
        <h2 className="text-center mt-5">Tasks</h2>
        <div className="text-center">
          <div className="container taskbox">
            {taskarray.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  task={task.task}
                  isDone={task.isdone}
                />
              );
            })}
            {ntaskarray.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  task={task.task}
                  isDone={task.isdone}
                />
              );
            })}
            <br />
            <div className="newtaskdiv">
              <input type="text" id="newtaskin" value={val} onChange={changehandler} />
              <div className="taskdivbuttons">
                <button id="addButton" onClick={taskcreator}>
                <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{history.push("/login")}</>;
};

export default TaskBox;
