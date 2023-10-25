// import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todosContext';
// import { Todo } from './models/todo';

function App() {
  return (
    <TodosContextProvider>
      {/* <NewTodo onAddTodo={addTodoHandler} /> */}
      <NewTodo />
      {/* <Todos items={todos} removeTodo={removeTodoHandler} /> */}
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
