import './AddButton.css';
import plusIcon from '../../assets/plus-icon.svg';

const AddButton = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick} aria-label="Add new todo">
      <img src={plusIcon} alt="Add" />
    </button>
  );
};

export default AddButton;

