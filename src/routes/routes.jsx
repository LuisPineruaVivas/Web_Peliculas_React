import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { MoviesPage } from "../pages/MoviesPage"
import { SeriesPage } from "../pages/SeriesPage"
import { SearchPage } from "../pages/searchPage"
import { MovieDetailPage } from "../pages/MovieDetailPage"
import { SerieDetailPage } from "../pages/SerieDetailPage"
import ScrollToTop from "../utils/ScrollToTop"
import LoginPage from "../pages/LoginPage"

export function MyRoutes(){
    return(<Router>
        <ScrollToTop/>
        <Routes>
            <Route exact path="/" element={<LandingPage></LandingPage>}></Route>
            <Route exact path="/movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route exact path="/series" element={<SeriesPage></SeriesPage>} ></Route>
            <Route exact path="/movies/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
            <Route exact path="/tv/:serieId" element={<SerieDetailPage></SerieDetailPage>}></Route>
            <Route exact path='/searchPage' element={<SearchPage></SearchPage>} ></Route>
            <Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
        </Routes>
    </Router>)
}