import { useParams } from "react-router-dom"
import {get} from "../data/httpClient"
import { useEffect, useState } from "react"
import "../pages/MovieDetailPage.css"
import { getMovieTrailer } from "../utils/getMovieTrailer";
import Header from '../components/Header';
import CircularRate from "../components/MovieDetailComponents/CircularRate";
import CastSwiper from "../components/MovieDetailComponents/CastSwiper";
import ImagesSwiper from "../components/MovieDetailComponents/ImagesSwiper";
import Footer from '../components/Footer';

export function MovieDetailPage(){
    const {movieId} = useParams()
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [cast, setCast] = useState([]);
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        get("/movie/" + movieId + "?language=es&append_to_response=credits").then((data) => {
            setMovie(data);
            setGeneros(data.genres);
            setCast(data.credits);
        })
        get("/movie/" + movieId + "/images").then((posters) => {
            setPosters(posters);
        })

    }, [movieId])

    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function fetchTrailer() {
            const trailerUrl = await getMovieTrailer(movieId, "movie");
            setTrailerUrl(trailerUrl);
        }
    
        fetchTrailer();
      }, [movieId]);

    return(
        <>
        <Header bool={true}/>

        <section className="movie-banner">

            <div className="m-banner-img">
                <img src={"https://image.tmdb.org/t/p/w1280"+movie.backdrop_path} alt={movie.title} />
            </div>

            <div className="banner-container">
                <div className="poster">
                    <img className="img-fluid" src={"https://image.tmdb.org/t/p/w780"+movie.poster_path} alt={movie.title} />
                </div>
                 
                 <div className="container">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="info" >
                        <div className="rate"><CircularRate value={movie.vote_average}/></div>
                        <div className="generos">
                            {generos.slice(0, 3).map((genero) => (
                                <a key={genero.id} href="#!" className="genero">{genero.name}</a>
                            ))}
                        </div>
                    </div>
                    <p className="description">{movie.overview}</p>
                    <h4 className='section-title'> Cast </h4>
                    {
                        cast.cast && cast.cast.length>0 && <CastSwiper slides={cast.cast} />
                    }
                 </div>
            </div>

            <div className="banner-container">
                <div className="container">
                    <h4 className='section-title' id="trailer-title" > Trailer </h4>
                        <div className="trailer">
                        {trailerUrl ? (
                            <iframe className="trailer-video"
                            width="1000"
                            height="600"
                            src={trailerUrl}
                            title="Movie Trailer"
                            allowFullScreen
                            >
                            </iframe>
                        ) : (
                            <p>Trailer not found</p>
                        )}
                        </div>
                </div>
            </div>

            <div className="banner-container">
                <div className="container">
                    <h4 className='section-title' id="trailer-title" > Capturas </h4>
                    {
                        posters.backdrops && posters.backdrops.length>0 && <ImagesSwiper slides={posters.backdrops} />
                    }
                        
                </div>
            </div>

        </section>

        <Footer/>
        
        </>
    )
}