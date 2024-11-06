import React from 'react'
import './movieDate.css'

function MovieDate({movie}) {
  return (
    <div className={`date ${movie.active ? "active" : undefined}` }>
      <h2>{formatDate(movie.release_date)}</h2>
    </div>
  )
}

export default MovieDate

function formatDate(dateString) {
  const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Deciembre"];
  const dateParts = dateString.split("-");
  const month = months[parseInt(dateParts[1], 10) - 1];
  const day = dateParts[2];
  return `Estreno el ${day} de ${month} `;
}