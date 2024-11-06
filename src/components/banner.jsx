import React, {useState, useEffect} from 'react'
import './banner.css';
import MovieContent from './BannerComponents/MovieContent';
import MovieDate from './BannerComponents/MovieDate';
import PlayBtn from './BannerComponents/PlayBtn';
import MovieSwiper from './BannerComponents/MovieSwiper';
import { get } from "../data/httpClient"


function Banner() {
  const [movies, SetMovies] = useState([])
  useEffect(() => {

    const fetchMovies = async () => {
      const discoverData = await get("/discover/movie?language=es");
      const initialMovies = discoverData.results;

      const moviePromises = initialMovies.map(movie =>
        get("/movie/" + movie.id + "?language=es").then(data => ({
          ...movie,  // Keep original movie data
          ...data    // Add or overwrite with detailed movie data
        })) 
      );

      let updatedMovies = await Promise.all(moviePromises);

      updatedMovies = updatedMovies.map((item, index) => {
        item.active = index === 0 ? true : false;
        return item;
      });

      const allMovies = updatedMovies.map(movie =>
        get("/movie/"+ movie.id +"/release_dates").then(data => ({
          ...movie,
          ...data
        }))
      )

      const finalmovies = await Promise.all(allMovies);

      SetMovies(finalmovies);
    };
    fetchMovies(); 
    
  }, []);
  
  const handleSlideChange = id => {
    const newMovies = movies.map(movie => {
      movie.active = false;
      if(movie.id === id){
        movie.active = true
      }
      return movie;
    });
    SetMovies(newMovies);
  };

  return (
    <div className="banner">
      {
        movies && movies.length>0 && movies.map(movie => (
          <div className="movie" key={movie.id}>
            <img src={"https://image.tmdb.org/t/p/w1280"+movie.backdrop_path} alt="Back" className= {`bgImg ${movie.active ? 'active' : undefined}`} />
            <div className="container-fluid">
              <div className="contenido">
                <div className="mobile">
                  <MovieContent movie={movie}/>
                </div>
                <div className="">
                  <MovieDate movie={movie}/>
                  <PlayBtn movie={movie}/>
                </div>
              </div>
            </div>
        </div>
        ))
      }
        {
          movies && movies.length>0 && <MovieSwiper slides={movies} slideChange={handleSlideChange}/>
        }
    </div>
  )
}

export default Banner