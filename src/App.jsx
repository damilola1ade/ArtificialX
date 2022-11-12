import React, {useEffect} from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {

  useEffect(() => {
    AOS.init({
        once: false,
        mirror: true,
        duration: 1000,
        easing: 'ease-out-cubic',
    });
  });

  return (
    <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  )
  
  }

export default App;