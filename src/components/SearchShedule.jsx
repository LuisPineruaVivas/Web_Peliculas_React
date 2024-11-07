import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { get } from '../data/httpClient';
import SeriesCard from './SeriesCard';
import MovieCard from './MovieCard';
import './shedule.css';
import './HeaderComponents/search.css';
import { Tab, Tabs } from '@material-ui/core';
import { styled } from '@mui/material/styles';

const StyledTab = styled(Tab)({
  "&.Mui-selected": {
    color: "var(--primary)"
  }
});

function SearchSchedule() {
  const [movies, setMovies] = useState(() => {
    const savedSearch = localStorage.getItem('moviesSearch');
    return savedSearch ? JSON.parse(savedSearch) : [];
  });

  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch movies based on the search query and type (movie or series)
  const fetchMovies = (search, type) => {
    get(`/search/${type ? "tv" : "movie"}?&language=es&query=${search}`)
      .then((data) => {
        if (data.results) {
          setMovies(data.results);
          localStorage.setItem('moviesSearch', JSON.stringify(data.results));
        } else {
          setMovies([]);
          localStorage.setItem('moviesSearch', JSON.stringify([]));
        }
      });
  };

  // Update URL and fetch movies when searchText or type changes
  useEffect(() => {
    if (searchText) {
      const params = new URLSearchParams({ query: searchText, type });
      navigate(`?${params.toString()}`, { replace: true });
      fetchMovies(searchText, type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, searchText]);

  // Load query parameters from URL on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    const typeParam = params.get('type');

    if (query) {
      setSearchText(query);
    }
    if (typeParam) {
      setType(parseInt(typeParam));
    }

    if (query) {
      fetchMovies(query, typeParam ? parseInt(typeParam, 10) : 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <section id='shedule' className='shedule mt-5'>
      <div className="container-fluid">
        <div className="row mt-5">
          <h4 className='section-title'> Busca Peliculas o Series </h4>
        </div>
        <div className='search mt-4' style={{ justifySelf: "center" }}>
          <input
            type="text"
            placeholder='Buscar'
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
          />
          <ion-icon name='search-outline'></ion-icon>
        </div>
        <Tabs
          value={type}
          centered
          onChange={(event, newValue) => {
            setType(newValue);
          }}
        >
          <StyledTab style={{ width: "50%", color: "white" }} label="Buscar Pelicula" />
          <StyledTab style={{ width: "50%", color: "white" }} label="Buscar Serie" />
        </Tabs>

        <div className="row mt-5">
          {movies && movies.length > 0 && type === 0 && movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {movies && movies.length > 0 && type === 1 && movies.map(movie => (
            <SeriesCard key={movie.id} serie={movie} />
          ))}
          {searchText && movies.length < 1 && (<h2>No se encontraron resultados</h2>)}
        </div>
      </div>
    </section>
  );
}

export default SearchSchedule;
