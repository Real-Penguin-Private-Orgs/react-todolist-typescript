import React, {useState, useEffect} from 'react';
import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }: any) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }: any) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React Hook",
      isCompleted: false
    }
  ])
  const addTodo = (text: any) => {
    const newTodos: any = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index: any)=> {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: any) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
      {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
