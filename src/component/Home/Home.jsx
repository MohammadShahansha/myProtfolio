import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'
import Benner from '../Banner/Benner';
import About from '../About/About';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className='home'>
            <NavBar></NavBar>
            <Benner></Benner> 
            <About></About>
            <Skills></Skills>
        </div>
    );
};

export default Home;