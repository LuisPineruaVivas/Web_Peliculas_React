import React, {useState, useEffect} from 'react'

import { get } from '../data/httpClient'
import filterDataSeries from '../data/filterDataSeries';
import './shedule.css'
import SeriesCard from './SeriesCard';

function SerieSchedule() {
    const [series, setSeries] = useState(() => {
      const savedSeries = localStorage.getItem('seriesData');
      return savedSeries ? JSON.parse(savedSeries) : [];
    })

    const [filters, setFilters] = useState(filterDataSeries)
    const savedFilter = localStorage.getItem('selectedFilterSerie') || 'popular'; 

    useEffect(() => {
      if (savedFilter) {
        handleFilterMovies(savedFilter);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchSeries = (category) => {
      if (category === 'popular') {
        get("/tv/top_rated?language=es").then(data => {
          setSeries(data.results);
          localStorage.setItem('seriesData', JSON.stringify(data.results));
        });
      } else {
        get(`/discover/tv?&with_genres=${category}&language=es`).then((data) => {
          setSeries(data.results);
          localStorage.setItem('seriesData', JSON.stringify(data.results));
          });
        } 
    } 

    useEffect(() => {
      if (series.length === 0) {
        handleFilterMovies(savedFilter);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFilterMovies = category=>{
      localStorage.setItem('selectedFilterSerie', category);
      setFilters(filters.map(filter => {
        filter.active = (filter.genre === category)
        return filter;
      })
    );
    fetchSeries(category);
    }


  return (
    <section id='shedule' className='shedule mt-5'>
        <div className="container-fluid">
            <div className="row mt-5">
                <h4 className='section-title'> Series </h4>
            </div>
            <div className="row">
                <ul className="filters">
                  {
                    filters.map(filter => (
                      <li key={filter._id} className={`${filter.active ? "active" : undefined}`} onClick={() => handleFilterMovies(filter.genre)} >{filter.name}</li>
                    ))
                  }
                </ul>
            </div>
            <div className="row mt-5">
                {series && series.length>0 && series.map(serie => (
                    <SeriesCard key={serie.id} serie={serie}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default SerieSchedule