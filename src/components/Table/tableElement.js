import classes from "./tableElement.module.css";

const TableElement = (props) => {
  const removeTask = (event) => {
    event.preventDefault();
    props.removeTaskHandler(props.elem.hour);
  };
  return (
    <tr>
      <td className={classes.tdHour}>{props.elem.hour}</td>
      <td className={classes.td}>
        <input
          className={classes.input}
          value={props.elem.task}
          onChange={() => {}}
        />
      </td>
    </tr>
  );
};

export default TableElement;
