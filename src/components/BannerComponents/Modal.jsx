import React from 'react'
import './modal.css'
import { useEffect, useState } from "react"
import { getMovieTrailer } from "../../utils/getMovieTrailer";

function Modal({movie, status, toggleModal}) {

    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function fetchTrailer() {
            const trailerUrl = await getMovieTrailer(movie.id, "movie");
            setTrailerUrl(trailerUrl);
        }
    
        fetchTrailer();
      }, [movie.id]);

  return (
    <div className= {`movieModal ${status ? "active":undefined}`}>
        <a href="#!" className='modalClose' onClick={toggleModal}>
            <ion-icon name="close-outline"></ion-icon>
        </a>
        <iframe 
            width="1000"
            height="450"
            src={trailerUrl}
            title={`${movie.title} | Trailer Oficial`}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default Modal