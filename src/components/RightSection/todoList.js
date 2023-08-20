import { useState } from "react";
import classes from "./todoList.module.css";
const TodoList = () => {
  const [todosList, setTodosList] = useState([
    { id: "cook", can: false },
    { id: "dance", can: false },
    { id: "drink", can: false },
  ]);
  const [canAddTodo, setCanAddTodo] = useState(false);
  const inputHandler = () => {
    setCanAddTodo(true);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    setTodosList((prev) => [
      ...prev,
      { id: event.target.todo.value, can: false },
    ]);
    setCanAddTodo(false);
  };
  const deleteTodoHandler = (del, key) => {
    setTodosList((current) => current.filter((todo) => del !== todo));
    console.log(key);
  };
  const completeTodoHandler = (completedTodo) => {
    const completedTodoList = todosList.map((todo) => {
      if (todo == completedTodo) {
        return {
          ...todo,
          can: true,
        };
      } else {
        return {
          ...todo,
        };
      }
    });
    setTodosList(completedTodoList);
    console.log(todosList);
  };
  return (
    <div>
      <h1 className={classes.todoList}>Todo list</h1>
      <ul className={classes.ulList}>
        {todosList.map((todo, i) => {
          return (
            <div className={classes.buttons} key={i}>
              <li className={todo.can ? classes.liscross : classes.lis}>
                {todo.id}
              </li>
              <div className={classes.buttonm}>
                <button
                  className={classes.button}
                  onClick={() => completeTodoHandler(todo)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                  </svg>
                </button>
                <button
                  className={classes.button}
                  onClick={() => deleteTodoHandler(todo, i)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm63 79c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                  </svg>{" "}
                </button>
              </div>
            </div>
          );
        })}
        <div onClick={inputHandler}>+</div>
        {canAddTodo && (
          <form className={classes.form} onSubmit={addTodoHandler}>
            <input className={classes.input} id="todo" type="text" />
            <input
              className={classes.inputButton}
              type="submit"
              value="Add"
            ></input>
          </form>
        )}
        {}
      </ul>
    </div>
  );
};

export default TodoList;
