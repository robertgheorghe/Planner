import classes from "./todoList.module.css";
const TodoList = () => {
  return (
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
  );
};

export default TodoList;
