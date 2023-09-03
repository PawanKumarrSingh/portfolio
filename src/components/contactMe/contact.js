import React, { useRef } from 'react'
import emailjs, { send } from '@emailjs/browser';
import './contact.css'
import LinkedinImage from '../../assets/linkedin-image.png'
import githubIcon from '../../assets/github-icon.png'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iztgpm9', 'template_08wb9km', form.current, '6dUoBgKsvgBaQgpxa5h8H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please Fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' action="index.html" method="get" onSubmit={sendEmail} ref={form}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={LinkedinImage} alt="fbicon" className="link" />
                        <img src={githubIcon} alt="githubIcon" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact