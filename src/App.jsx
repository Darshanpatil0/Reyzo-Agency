import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Bulr from './Components/Bulr';
import PROGRESS from './Components/PROGRAMS';
import Why from './Components/Why';
import Plaing from './Components/Plaing';
import Meater from './Components/Meater';
import Email from './Components/Email';
import Fotter from './Components/Fotter';
import Project from './Components/Project';

const App = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return (
      <div className='w-full h-screen flex items-center justify-center bg-zinc-700 text-white'>
        {/* Simple loader */}
        <div id="preloader">
       <div id="loader"></div>
      </div>
      </div>
    );
  }

  return (
    <div className='w-full h-screen appmain text-white bg-zinc-700'>
      <Navbar />
      <Bulr />
      <Hero />
      <PROGRESS />
      <Project />
      <Why />
      <Plaing />
      <Meater />
      <Email />
      <Fotter />
    </div>
  );
};

export default App;
