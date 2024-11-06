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

export function SerieDetailPage(){
    const {serieId} = useParams()
    const [serie, setSerie] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [cast, setCast] = useState([]);
    const [posters, setPosters] = useState([]);
    useEffect(() => {
        get("/tv/" + serieId + "?language=es&append_to_response=credits").then((data) => {
            setSerie(data);
            setGeneros(data.genres);
            setCast(data.credits);
        })
        get("/tv/" + serieId + "/images").then((posters) => {
            setPosters(posters);
        })

    }, [serieId])

    const [trailerUrl, setTrailerUrl] = useState('');
    useEffect(() => {
        async function fetchTrailer() {
            const trailerUrl = await getMovieTrailer(serieId, "tv");
            setTrailerUrl(trailerUrl);
        }
    
        fetchTrailer();
      }, [serieId]);

    return(
        <>
        <Header bool={true}/>

        <section className="movie-banner">

            <div className="m-banner-img">
                <img src={"https://image.tmdb.org/t/p/w1280"+serie.backdrop_path} alt={serie.name} />
            </div>

            <div className="banner-container">
                <div className="poster">
                    <img className="img-fluid" src={"https://image.tmdb.org/t/p/w780"+serie.poster_path} alt={serie.name} />
                </div>
                 
                 <div className="container">
                    <h1 className="movie-title">{serie.name}</h1>
                    <div className="info" >
                        <CircularRate value={serie.vote_average}/>
                        <div className="generos">
                            {generos.slice(0, 3).map((genero) => (
                                <a href="#!" key={genero.id} className="genero">{genero.name}</a>
                            ))}
                        </div>
                    </div>
                    <p className="description">{serie.overview}</p>
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
                            <iframe
                            width="1000"
                            height="600"
                            src={trailerUrl}
                            title="Movie Trailer"
                            allowFullScreen
                            ></iframe>
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