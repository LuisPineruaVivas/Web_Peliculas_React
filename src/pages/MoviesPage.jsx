import React from 'react'
import Header from '../components/Header';
import MovieList from './MovieList';
import Footer from '../components/Footer';
import BackToTopBtn from '../components/BackToTopBtn';
import { useState, useEffect } from 'react';

export function MoviesPage() {
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
    <MovieList/>
    <Footer/>
    <BackToTopBtn scroll={scroll}/>
    </>
  )
}
