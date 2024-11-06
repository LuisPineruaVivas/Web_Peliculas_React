const API = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
export async function getSeriesTrailer(movieId){
    const response = await fetch(`${API}/tv/${movieId}/videos?api_key=${API_KEY}`);
    const data = await response.json();
    const trailers = data.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
    if (trailers.length > 0) {
        return `https://www.youtube.com/embed/${trailers[0].key}`;
      } else {
        return undefined;
      }
}
