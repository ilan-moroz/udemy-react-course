import React, { useContext } from 'react';
// import { Todo } from '../models/todo';
import TodosItem from './TodoItem';
import classes from './Todos.module.css';
import { TodosContext } from '../store/todosContext';

// const Todos: React.FC<{
//   items: Todo[];
//   removeTodo: (todoId: string) => void;
// }> = props => {

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map(item => (
        <TodosItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => todosCtx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
