import './SearchBar.css';
import searchIcon from '../../assets/search-icon.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search note..."
      />
      <button className="search-btn" aria-label="Search">
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;

