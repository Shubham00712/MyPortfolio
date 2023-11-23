import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './navbar';
import Contact from './contactme';
import Experience from './experience';
import Skills from './skills';
import About from './about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <About />
    <Experience />
    <Skills />
    <Contact />
  </React.StrictMode>
);
