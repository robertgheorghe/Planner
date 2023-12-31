import React, { useEffect, useState } from "react";
import classes from "./plannerTable.module.css";
import TableElement from "./tableElement";
import { db } from "../../config/firebase";
import { setDoc, doc, getDocs, query, collection, getDoc } from "firebase/firestore";
import { auth } from "../../config/firebase";
const PlannerTable = () => {
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
    { hour: "00:00", task: "" },
  ]);
  useEffect(() => {
    (async () => {
      try {
        const docRef = doc(db, "tables", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log(data.newTask)
         
          setNewTask(data.newTask);
        } else {
          
        }
      } catch (error) {
        console.log({ error });
      }
    })();
  }, []);

  const [editPressed, setEditPressed] = useState(false);

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
    setNewTask(changedHour);
  };
  const editHandler = () => {
    if (editPressed) {
      setDoc(doc(db, "tables", auth.currentUser.uid), {newTask});
    }
    setEditPressed((prev) => !prev);
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
          <tr style={{ position: "relative" }}>
            <th className={classes.th}>Hour</th>
            <th className={classes.th}>Task</th>
            <div
              className={classes.edit}
              style={{
                position: "absolute",
                right: 10,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <button className={classes.editButton} onClick={editHandler}>
                Edit
              </button>
            </div>
          </tr>
        </thead>
        <tbody className={classes.tbody}>
          {newTask.map((elem) => (
            <TableElement
              elem={elem}
              addTaskHandler={addTaskHandler}
              editPressed={editPressed}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PlannerTable;
