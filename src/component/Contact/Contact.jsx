import React from 'react';
import './Contact.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsChatRightTextFill, BsTelegram } from "react-icons/bs";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    return (
        <div className='py-20 md:flex items-center px-2 md:mx-36 gap-40'>
            <div className='contact-form-container'>
                <div className='contact_form'>
                    <div className='input_group'>
                        <p><FaUser></FaUser></p>
                        <input type="text" name="" placeholder='Your Name' className='input_text' id="" />
                    </div>
                    <div className='input_group'>
                        <p><MdEmail></MdEmail></p>
                        <input type="email" name='' placeholder='Your Email' className='input_text' />
                    </div>
                    <div className='input_group'>
                        <p> <BsChatRightTextFill></BsChatRightTextFill></p>
                        <textarea name="" id="" placeholder='Type Your Messege' className='input_text'></textarea>
                    </div>
                    <div className='submit-button'>
                        <input type="submit" value="Send" />
                    </div>
                </div>

            </div>
            <div className='text-[--text-color] mt-10'>
                <div className='infos'>
                    <div className='mb-5'>
                        <h2 className='font-semibold text-lg mt-2 info'>Email:</h2>
                        <h2 className='text-lg'>mohammadshahansha111@gmail.com</h2>
                    </div>
                    <div className='mb-5'>
                        <h2 className='font-semibold text-lg mt-2 info'>Phone:</h2>
                        <h2 className='text-lg'>+880 1725915331</h2>

                    </div>
                    <div className='mb-5'>
                        <h2 className='font-semibold text-lg mt-2 info'>WhatsApp & Telegram</h2>
                        <h2 className='text-lg'>+880 1740252019</h2>

                    </div>
                    <div className='info'>
                        <h2 className='font-semibold text-lg mt-2 info'>Address</h2>
                        <h2 className='text-lg'>Dhaka, Bangladesh</h2>

                    </div>
                    <div className='socials mx-auto md:ms-0'>
                        {/* <a href="#"><BsFacebook></BsFacebook></a> */}
                        <a href="#"><BsGithub></BsGithub></a>
                        <a href="#"><BsLinkedin></BsLinkedin></a>
                        <a href="#"><BsTelegram></BsTelegram></a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;