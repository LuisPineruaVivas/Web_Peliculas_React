import React from 'react'
import './search.css'
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    if (query.trim()){
        navigate(`/searchPage?query=${encodeURIComponent(query)}`);
    }
  };


  return (
    <div className='search'>
        <input type="text" placeholder='Busca Peliculas y Series' value={query} onChange={handleChange} />
        <button onClick={handleSearch}><ion-icon name='search-outline'></ion-icon></button>
    </div>
  )
}

export default Search;