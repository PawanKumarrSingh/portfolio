import React from 'react'
import './skills.css';
import blkchnImg from '../../assets/blockchainDevelopment.jpg'
import webdsnImg from '../../assets/website-design.png'

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">
                My Skills
            </span>
            <span className="skillDesc">
                I'm a skilled Blockchain Developer and passionate Web Developer with experience in creating decentralized Apps(Dapp). I have a strong understanding of blockchain technology and akeen eye for details. I am proficient in React, NodeJS, Solidity, Javascript.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={blkchnImg} alt="blkchnimg" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>BlockChain Development</h2>
                        <p>I am hevijbkbckbsbcsbcbscscsvcskvcvsc</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={webdsnImg} alt="webdsn" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>ima kjdk.sdksgwfgsv,bsfgsfggs.c.kg</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills