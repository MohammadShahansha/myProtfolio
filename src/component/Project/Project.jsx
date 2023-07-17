import React from 'react';
import ass10 from '../../assets/image/assi10.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import './Project.css'

const Project = () => {
    return (
        <div className='project'>
            <h2 className='heading font-bold'>My <span className='text-[--main-color]'>Project</span></h2>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="first-project"
                    contentStyle={{ background: '#081b29', color: '#ededed' }}
                    contentArrowStyle={{ borderRight: '10px solid  #081b29' }}
                    // date="2011 - present"
                    iconStyle={{ background: '#081b29', color: '#ededed' }}
                    icon={<FaNodeJs></FaNodeJs>}
                >
                    <div className='flex items-center mt-[-15px] mb-2'>
                        <h1 className=' font-bold text-[--text-color]'>Technologys: <span className=' font-medium'>ReactJs, JavaScript, Node js, Mongodb</span></h1>
                       
                    </div>
                    <div class="image-wrap mb-[-10px]">
                        <a href="https://rahmanzeb.com">
                            <img src={ass10} />
                        </a>
                    </div>
                    <div className='bttn-box2 mx-auto mb-[-10px]'>
                        <a href="#" className='bttn2' >Client Code</a>
                        <a href="#" className='bttn2'>Server Code</a>
                        <a href="#" className='bttn2'>Live Link</a>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="first-project"
                    contentStyle={{ background: '#081b29', color: '#ededed' }}
                    contentArrowStyle={{ borderRight: '10px solid  #081b29' }}
                    // date="2011 - present"
                    iconStyle={{ background: '#081b29', color: '#ededed' }}
                    icon={<FaReact></FaReact>}
                >
                    <div className='flex items-center mt-[-15px] mb-2'>
                        <h1 className=' font-bold text-[--text-color]'>Technologys: <span className=' font-medium'>ReactJs, JavaScript, Node js, Mongodb</span></h1>
                       
                    </div>
                    <div class="image-wrap mb-[-10px]">
                        <a href="https://rahmanzeb.com">
                            <img src={ass10} />
                        </a>
                    </div>
                    <div className='bttn-box2 mx-auto  mb-[-10px]'>
                        <a href="#" className='bttn2' >Client Code</a>
                        <a href="#" className='bttn2'>Server Code</a>
                        <a href="#" className='bttn2'>Live Link</a>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="first-project"
                    contentStyle={{ background: '#081b29', color: '#ededed' }}
                    contentArrowStyle={{ borderRight: '10px solid  #081b29' }}
                    // date="2011 - present"
                    iconStyle={{ background: '#081b29', color: '#ededed' }}
                    icon={<BiLogoMongodb></BiLogoMongodb>}
                >
                    <div className='flex items-center mt-[-15px] mb-2'>
                        <h1 className=' font-bold text-[--text-color]'>Technologys: <span className=' font-medium'>ReactJs, JavaScript, Node js, Mongodb</span></h1>
                       
                    </div>
                    <div class="image-wrap mb-[-10px]">
                        <a href="https://rahmanzeb.com">
                            <img src={ass10} />
                        </a>
                    </div>
                    <div className='bttn-box2 mx-auto  mb-[-10px]'>
                        <a href="#" className='bttn2' >Client Code</a>
                        <a href="#" className='bttn2'>Server Code</a>
                        <a href="#" className='bttn2'>Live Link</a>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Project;
// #00abf0
// vertical-timeline-element-subtitle