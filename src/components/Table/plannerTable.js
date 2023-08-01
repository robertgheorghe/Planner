import React, { useState } from "react";
import classes from "./plannerTable.module.css";
import TableElement from "./tableElement";
import Modal from "./modal";
const PlannerTable = () => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [newTask, setNewTask] = useState([
    { hour: "9:00", task: "" },
    { hour: "10:00", task: "" },
    { hour: "11:00", task: "" },
    { hour: "12:00", task: "" },
    { hour: "13:00", task: "" },
    { hour: "14:00", task: "" },
    { hour: "15:00", task: "" },
    { hour: "16:00", task: "" },
    { hour: "17:00", task: "" },
    { hour: "18:00", task: "" },
    { hour: "19:00", task: "" },
    { hour: "20:00", task: "" },
    { hour: "21:00", task: "" },
    { hour: "22:00", task: "" },
    { hour: "23:00", task: "" },
  ]);
  const showModal = () => {
    setModalIsShown((prevState) => !prevState);

    console.log(modalIsShown);
  };
  const addTaskHandler = (task, time) => {
    const changedHour = newTask.map((elem) => {
      if (time == elem.hour) {
        return {
          ...elem,
          task: task,
        };
      } else {
        return {
          ...elem,
        };
      }
    });
    console.log(changedHour);

    setNewTask(changedHour);
    console.log(newTask);
  };

  const removeTaskHandler = (time) => {
    const changedHour = newTask.map((elem) => {
      if (time == elem.hour) {
        return {
          ...elem,
          task: "",
        };
      } else {
        return {
          ...elem,
        };
      }
    });
    console.log(changedHour);

    setNewTask(changedHour);
  };

  return (
    <div className={classes.planner}>
      <table
        className={classes.table}
        border={0}
        cellSpacing={0}
        cellPadding={0}
      >
        <thead className={classes.thead}>
          <tr>
            <th className={classes.th}>Hour</th>
            <th className={classes.th}>Task</th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {newTask.map((elem) => (
            <TableElement elem={elem} removeTaskHandler={removeTaskHandler} />
          ))}
        </tbody>
      </table>
      <div className={classes.rightSection}>
        <div>
          <h1 className={classes.todoList}>Todo list</h1>
          <ul className={classes.ulList}>
            {["cook", "dance", "drink"].map((todo, i) => {
              return (
                <div key={i}>
                  <li>{todo}</li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={classes.notesWrapper}>
          <textarea placeholder="Notes" rows={8} />
        </div>
      </div>
      {modalIsShown && <Modal addTaskHandler={addTaskHandler} />}
    </div>
  );
};

export default PlannerTable;
