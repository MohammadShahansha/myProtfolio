import React from 'react';
import img from '../../assets/image/img1.png'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <h2 className='heading font-bold'>About <span className='text-[--main-color] '>Me</span></h2>

            <div className='about-img relative w-[280px] h-[280px] rounded-full flex justify-center items-center'>
                <img src={img} className='w-[250px] h-[250px] rounded-full bg-[#081b29] ' alt="" />
                <span className='circleSpin'></span>
            </div>
            <div className=' container'>
                <h2 className='text-center text-3xl font-bold mb-5'>Mern Stack Developer</h2>
                <p className='px-3 md:text-center'>
                I am Mohammad Shahansha.I am a Bangladeshi.I read in Comilla University in 3rd year and My subject is B.Sc Engineering in Information & Communication Technology
                     As a MERN stack developer I am <span className='font-semibold'> specializes in using MongoDB, Express.js, React, and Node.js to develop full-stack web applications. I work with MongoDB for database management, Express.js for server-side development, React for client-side UI, and Node.js for server-side logic.</span> Responsibilities include designing the application architecture, implementing APIs, managing the database, building UI components, handling state management, and deploying the application.As well as I have <span className='font-semibold'> strong JavaScript, HTML, CSS skills </span> which are must essential, along with knowledge of web development principles and technologies.
                </p>
                {/* <div className='bttn-box'>
                    <a className='bttn' href="#">Read more</a>
                </div> */}
            </div>

        </div>
    );
};

export default About;