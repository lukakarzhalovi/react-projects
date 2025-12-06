import './FilterDropdown.css';
import dropdownArrow from '../../assets/dropdown-arrow.svg';

const FilterDropdown = ({ value, onChange }) => {
  return (
    <div className="filter-dropdown">
      <select
        className="filter-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">ALL</option>
        <option value="complete">COMPLETE</option>
        <option value="incomplete">INCOMPLETE</option>
      </select>
      <div className="dropdown-arrow">
        <img src={dropdownArrow} alt="Dropdown" />
      </div>
    </div>
  );
};

export default FilterDropdown;

