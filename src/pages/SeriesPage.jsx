import React from 'react'
import Header from '../components/Header';
import SerieList from './SeriesList'
import Footer from '../components/Footer';
import BackToTopBtn from '../components/BackToTopBtn';
import { useState, useEffect } from 'react';

export function SeriesPage() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll])
  return (
    <>
    <Header bool={true}/> 
    <SerieList/>
    <Footer/>
    <BackToTopBtn scroll={scroll}/>
    </>
  )
}
