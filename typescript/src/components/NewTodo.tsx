import { useContext, useRef } from 'react';
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todosContext';

// const NewTodo: React.FC<{ onAddTodo: (todo: string) => void }> = props => {
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = todoInput.current!.value;

    if (todo.trim().length === 0) return;

    todosCtx.addTodo(todo);
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
