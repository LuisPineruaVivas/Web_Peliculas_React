import React from 'react'
import Header from '../components/Header';
import Banner from '../components/banner';
import Trend from '../components/Trend'
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import BackToTopBtn from '../components/BackToTopBtn';
import { useState, useEffect } from 'react';

export function LandingPage() {
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
    <Banner/> 
    <Trend type={"movie"} item={"upcoming"} title={"Peliculas Populares"}/>
    <Trend type={"tv"} item={"top_rated"} title={"Series Populares"}/>
    <Blog/>
    <Footer/>
    <BackToTopBtn scroll={scroll}/>
    </>
  )
}
