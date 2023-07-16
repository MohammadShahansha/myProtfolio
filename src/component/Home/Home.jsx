import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'
import Benner from '../Banner/Benner';
import About from '../About/About';

const Home = () => {
    return (
        <div className='home'>
            <NavBar></NavBar>
            <Benner></Benner> 
            <About></About>
        </div>
    );
};

export default Home;