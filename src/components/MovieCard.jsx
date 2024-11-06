import React from 'react'
import { getMovieImage } from "../utils/getMovieImage";
import './movieCard.css'
import { Link } from "react-router-dom";

function MovieCard({movie}) {
  const imageUrl = getMovieImage(movie.poster_path, 300)
  return (
    <div className="col-lg-3 col-md-4 col-sm-4">
        <div className="movie-card">
            <img src={imageUrl} alt="Preview" className='img-fluid' />
            <p> Estreno el {movie.release_date} </p>
            <div className="content">
              <h4>{movie.title}</h4>
              <div className="card-icons">
                <Link to={"/movies/"+movie.id}>
                  <ion-icon name="play-outline"></ion-icon>
                </Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default MovieCard