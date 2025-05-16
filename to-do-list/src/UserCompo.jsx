import React, { useState } from "react";
import './CompoStyle.css'


const UserCompo = () => {
  const [info, setInfo] = useState({ task:'' });
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const saveData = (e) => {
    e.preventDefault();
    setData([...data,info])

    setInfo({ task: "" });
    
    if (id !== "") {
        let res = data.map((i, index) => {
            if (index == id) {
                return info;
            }
            return i;
        });
        setData(res);
    } else {
        setData([...data, info]);
    }
};

  const hanlChange = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };
  const deleteTask = (id) => {
    let res = data.filter((i, index) => {
      return index != id;
    });
    setData(res);
  };
  const updTask = (index) => {
    const selectedTask = data[index];
    setInfo(selectedTask);
    setId(index);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="to-heading">Add To-Do</h1>
        <form className="todo-form" action="#" method="post" onSubmit={saveData}>
          <input
            type="text"
            name="task"
            className="toto-input"
            onChange={hanlChange}
            value={info.task}
            placeholder="Write your task"
          />
          <input className="todo-button" type="submit" value="save" />
        </form>

        <ul>
          {data.map((item, index) => {
            return (
              <li className="todo-item" key={index}>
                {item.task}
                <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                <button className="edit-btn"  onClick={() => updTask(index)}>Edit</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UserCompo;
