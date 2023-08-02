import classes from "./tableElement.module.css";

const TableElement = (props) => {
  const addTask = (event) => {
    event.preventDefault();
    props.addTaskHandler(event.target.value, props.elem.hour);
  };
  return (
    <tr>
      <td className={classes.tdHour}>{props.elem.hour}</td>
      <td className={classes.td}>
        <input
          id="task"
          className={classes.input}
          value={props.elem.task}
          onChange={addTask}
        />
      </td>
    </tr>
  );
};

export default TableElement;
