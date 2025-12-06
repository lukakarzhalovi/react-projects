import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import FilterDropdown from './components/FilterDropdown/FilterDropdown';
import EmptyState from './components/EmptyState/EmptyState';
import TodoList from './components/TodoList/TodoList';
import AddButton from './components/AddButton/AddButton';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    const text = prompt('Enter todo text:');
    if (text && text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    return (
      filter === 'all' ||
      (filter === 'complete' && todo.completed) ||
      (filter === 'incomplete' && !todo.completed)
    );
  });

  return (
    <div className="app-container">
      <Header />
      <div className="controls-row">
        <SearchBar/>
        <FilterDropdown value={filter} onChange={setFilter} />
      </div>
      <div className="todo-content">
        {filteredTodos.length === 0 ? (
          <EmptyState />
        ) : (
          <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
        )}
      </div>
      <AddButton onClick={addTodo} />
    </div>
  );
}

export default App;
