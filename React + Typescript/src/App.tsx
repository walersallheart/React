import { useState } from 'react';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text:string) =>  {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      //use concat instead of push because it creates a new array instead of mutating the existing one
      return prevTodos.concat(newTodo);
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
