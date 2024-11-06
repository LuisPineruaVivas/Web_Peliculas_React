import React from 'react'
import './trendCard.css'
import { Link } from "react-router-dom";

function TrendCard({slide, type}) {
  return (
    <div className="col-lg-12 pt-3">
      <div className='movie-card'>
        <img src={"https://image.tmdb.org/t/p/original"+slide.poster_path} alt="" className="img-fluid" />
        <div className="content">
            <h4>{type === "movie" ? slide.title :  slide.name}</h4>
            <div className="card-icons">
              <Link to={`/${type === "movie" ? "movies" : "tv"}/`+slide.id}>
                <ion-icon name="play-outline"></ion-icon>
              </Link>
            </div>
        </div>

      </div>
    </div>
  )
}

export default TrendCard