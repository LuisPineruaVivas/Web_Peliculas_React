import React, {useState, useEffect} from 'react'

import { get } from '../data/httpClient'
import MovieCard from './MovieCard'
import filterDataMovie from '../data/filterDataMovie';
import './shedule.css'

function MovieSchedule() {
    const [movies, setMovies] = useState(() => {
      const savedMovies = localStorage.getItem('moviesData');
      return savedMovies ? JSON.parse(savedMovies) : [];
    });

    const [filters, setFilters] = useState(filterDataMovie)

    const savedFilter = localStorage.getItem('selectedFilterMovie') || 'popular'; 

    useEffect(() => {
      if (savedFilter) {
        handleFilterMovies(savedFilter);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchMovies = (category) =>  {
      if (category === 'popular'){
        get("/movie/popular?language=es").then(data => {
        setMovies(data.results);
        localStorage.setItem('moviesData', JSON.stringify(data.results));
        });
      } else{
        get(`/discover/movie?&with_genres=${category}&language=es`).then((data) => {
          setMovies(data.results);
          localStorage.setItem('moviesData', JSON.stringify(data.results)); // Save movies to localStorage
        });
      }
    }

    useEffect(() => {
      if (movies.length === 0) {
        handleFilterMovies(savedFilter);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFilterMovies = category =>{
      localStorage.setItem('selectedFilterMovie', category);
      setFilters(filters.map(filter => {
        filter.active = (filter.genre === category)
        return filter;
      })
    );
    fetchMovies(category);
    }

  return (
    <section id='shedule' className='shedule mt-5'>
        <div className="container-fluid">
            <div className="row mt-5">
                <h4 className='section-title'> Peliculas </h4>
            </div>
            <div className="row">
                <ul className="filters">
                  {
                    filters.map(filter => (
                      <li key={filter._id} className={`${filter.active ? "active" : undefined}`} onClick={() => handleFilterMovies(filter.genre)} >{filter.name}</li>
                    ))
                  }
                </ul>
            </div>
            <div className="row mt-5">
                {movies && movies.length>0 && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MovieSchedule