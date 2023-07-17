import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import './Banner.css'
import img from '../../assets/image/img1.png'
const Benner = () => {
    return (
        <div className='benner md:flex md:items-center md:justify-between'>
            <div className='benner-container'>
                <h1>Hi, I'm</h1>
                <h1>Mohammad Shahansha</h1>
                <div className='text-animate'>
                    <h2>Mern Stack Developer</h2>
                </div>
                <p className='mb-6 md:mb-auto'>I am Mohammad Shahansha.I am a Bangladeshi.I read in Comilla University in 3rd year and My subject is B.Sc Engineering in Information & Communication Technology. </p>
                <div className='bttn-box'>
                    <a href="#" className='bttn'>Hire Me</a>
                    <a href="#" className='bttn'>Resume</a>
                </div>
                <div className='socials mx-auto md:ms-0'>
                    <a href="#"><BsFacebook></BsFacebook></a>
                    <a href="#"><BsGithub></BsGithub></a>
                    <a href="#"><BsLinkedin></BsLinkedin></a>
                </div>
            </div>

            <div className='img' >
                <img className='rounded-full md:h-[350] md:w-[350] border-sky-600 border-solid border-4' src={img} alt="" />
            </div>

        </div>
    );
};

export default Benner;