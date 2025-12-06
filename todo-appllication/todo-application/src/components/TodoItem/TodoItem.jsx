import './TodoItem.css';
import checkmarkIcon from '../../assets/checkmark-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="checkmark">
          <img src={checkmarkIcon} alt="Check" />
        </span>
      </label>
      <span className="todo-text">{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
};

export default TodoItem;

