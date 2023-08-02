import Notes from "./notes";
import TodoList from "./todoList";
import classes from "./rightSection.module.css";
const RightSection = () => {
  return (
    <div className={classes.rightSection}>
      <TodoList />
      <Notes />
    </div>
  );
};
export default RightSection;
