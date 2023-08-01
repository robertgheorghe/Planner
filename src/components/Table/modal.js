import classes from "./modal.module.css";

const Modal = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.task.value);
    props.addTaskHandler(event.target.task.value, event.target.time.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" id="task" name="task" />
      <select id="time">
        <option value="9:00">9:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};
export default Modal;
