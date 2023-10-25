import { useRef } from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (todo: string) => void }> = props => {
  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = todoInput.current!.value;

    if (todo.trim().length === 0) return;

    props.onAddTodo(todo);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
