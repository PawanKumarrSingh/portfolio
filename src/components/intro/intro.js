import React from 'react';
import { Link } from 'react-scroll';
import './intro.css';
import image from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <div className="left">
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Pawan Kumar Singh</span><br />Blockchain Developer</span>
                    <p className="introPara">I'm a skilled blockchain developer <br /> with great experience.</p>
                    <Link><button className="btn"><img src={btnImg} alt="buttonimg" className='btnImg' />Hire Me</button></Link>
                </div>
                <div className="right">
                    <img
                        src={image}
                        alt="myimage"
                        width="300"
                        height="300"
                        className="bg"
                    />
                </div>
            </div>
            
        </section>
    )
}

export default Intro