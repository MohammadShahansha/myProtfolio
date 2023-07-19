import React from 'react';
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import './Banner.css'
import img from '../../assets/image/img1.png'
import Typed from 'typed.js';
const Benner = () => {
    // var typed = new typed(".text", {
    //     String: ["Frontend Developer", "Mern Stack Developer"],
    //     typeSpeed:100,
    //     backSpeed:100,
    //     backDelay:1000,
    //     loop: true
    // })
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Front-End Developer', 'Marn Stack Developer'],
      typeSpeed: 100,
    //   backSpeed:100,
    //   backDelay:1000,
      loop: true
    });

    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return (
        <div className='benner md:flex md:items-center md:justify-between'>
            <div className='benner-container'>
                <h2 className='text-2xl font-semibold'>Hello, It's Me</h2>
                <h1>Mohammad Shahansha</h1>
                <div className='text-animate App mt-3'>
                    <h2 className='text-2xl font-semibold'>And I'm a  <span ref={el} /></h2>
                </div>
                <p className='mb-6 md:mb-auto'>As a MERN stack developer, I am a skilled professional well-versed in building web applications using MongoDB, Express.js, React, and Node.js. They are proficient in both front-end and back-end development.</p>
                {/* <p className='mb-6 md:mb-auto'>I am Mohammad Shahansha.I am a Bangladeshi.I read in Comilla University in 3rd year and My subject is B.Sc Engineering in Information & Communication Technology. </p> */}
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