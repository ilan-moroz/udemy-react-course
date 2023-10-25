import React from 'react';
import { Todo } from '../models/todo';
import TodosItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul className={classes.todos}>
      {props.items.map(item => (
        <TodosItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
