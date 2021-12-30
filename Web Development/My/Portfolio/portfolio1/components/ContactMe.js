import axios from 'axios';
import {useState} from 'react'
import Image from 'next/image';

import contactmeStyles from '../styles/ContactMe.module.scss';


const GETFORM_FORM_ENDPOINT = "https://getform.io/f/1d65541e-64dc-4128-8d72-cdbc90a3754f}";

const ContactMe = () => {

    const handleSubmit = (e) => {
        // e.preventDefault();
        return(
            <h1>Your form has been submitted.</h1>
        );

    }

    return (
        <div className={contactmeStyles.container} id="contact">
        <h1>Contact Me</h1>
            {/* <div>
            <Image src="/../public/images/contact-me/email.svg" alt="Project" width="100" height="36"/>
            <h2>Email</h2>
            </div>

            <div>
            <Image src="/../public/images/contact-me/github.svg" alt="Project" width="100" height="40"/>
            <h2>GitHub</h2>
            </div>

            <div>
            <Image src="/../public/images/contact-me/linkedin.svg" alt="Project" width="100" height="40"/>
            <h2>LInkedIn</h2>
            </div> */}

            <form action="https://getform.io/f/1d65541e-64dc-4128-8d72-cdbc90a3754f" method="POST" onSubmit={handleSubmit}>
                <label htmlFor="name"></label>
                <input className={contactmeStyles.inputBox} type="text" name="name" placeholder="Enter your name" required/>
                <label htmlFor="email"></label>
                <input className={contactmeStyles.inputBox} type="email" name="email" placeholder="Enter your email id"  required/>
                <label htmlFor="message"></label>
                <textarea className={contactmeStyles.inputBox} type="text" name="message" placeholder="Enter your message"  required></textarea>
                
                <button type="submit" target='/blank'>Submit</button>
            </form>
        </div>
    )
}

export default ContactMe;
