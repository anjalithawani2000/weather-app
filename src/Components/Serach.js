import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { isEmpty } from 'lodash';
const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className='search-container'>
      <input
        id="searchInput"
        type="text"
        className="search-bar"
        onChange={handleChange}
        value={searchTerm}
        placeholder='Enter State'
      />
      <button type="submit" className="search-button"  >
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </div>
  )
}

export default Search