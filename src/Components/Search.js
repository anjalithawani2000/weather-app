import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Search = (prop) => {
  const { applySearch } = prop;
  const [searchFirstTerm, setFirstSearchTerm] = useState('');

  const handleChange = (event) => {
    setFirstSearchTerm(event.target.value);
  }

  return (
    <div className='search-container'>
      <input
        id="searchInput"
        type="text"
        className="search-bar"
        onChange={handleChange}
        value={searchFirstTerm}
        placeholder='Enter State'
      />
      <button type="submit" className="search-button" onClick={() => { applySearch(searchFirstTerm) }}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </div>
  )
}

export default Search