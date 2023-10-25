import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todo: string) => {
    const newTodo = new Todo(todo);
    setTodos(prev => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
