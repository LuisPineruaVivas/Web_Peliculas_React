import React from 'react'
import './movieContent.css'
import Button from '../HeaderComponents/Button'

function MovieContent({movie}) {
  const getCertification = (movie) => {
  const esRelease = movie.results.find(result => result.iso_3166_1 === "ES");

  if (esRelease && esRelease.release_dates && esRelease.release_dates[0].certification) {
    return esRelease.release_dates[0].certification;
  }
  const fallbackRelease = movie.results.find(result => 
    result.release_dates && result.release_dates[0].certification
  );
  if (fallbackRelease) {
    return fallbackRelease.release_dates[0].certification;
  }
  return "No certification found";
};
  const certification = getCertification(movie);
  return (
    <div className={`content ${movie.active ? "active" : undefined}`}>
        <div className="movie-title">
          <h2>{movie.title}</h2>
        </div>
        <h4>
          <div>
            <span>Año: {movie.release_date.substring(0,4)}</span>
            <span><i>Clasf: {certification}</i></span>
          </div>
          <div>
            <span>Dur: {toHoursAndMinutes(movie.runtime)}</span>
            <span>{movie.genres[0].name}</span>
          </div>
          
        </h4>
        <p>
          {movie.overview.length > 300
            ? movie.overview.substring(0, 400) + "..."
            : movie.overview}
        </p>
        <div className="button">
          <Button icon={<ion-icon name="eye-outline"></ion-icon>} href={`/movies/${movie.id}`} name='Ver mas' color='#ff3700' bgColor = '#ffffff'/>
          <Button icon={<ion-icon name="add-outline"></ion-icon>} href={"/login"} name='Mi Lista'/>
        </div>
    </div>
  )
}

export default MovieContent

function toHoursAndMinutes(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}