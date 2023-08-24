import React from 'react'
import { Link } from 'react-router-dom'
import Headshot from './images/trandall_profile.jpg'

export const Home = (props) => {
    return (
        <div id='homepage'>
            <img id='headshot' alt='headshot' src={Headshot} height={200} width={250} />
            <div id="home-info-container">
                <div id='about-me-container'>
                    <div id='about-me-hello'>Hello</div>
                    <div id='about-me-description'>A Bit About Me</div>
                    <p id='about-me'>I am a developer from Atlanta, Georgia who is passionate about building sites with simple solutions and in-depth, user-friendly UI. I recently completed The Odin Project (maybe add “my most extensive project” or add a brief description of it here). I have also included additional projects I have created including (give a couple examples with brief descriptions). The majority of my work is completed with a combination of HTML, CSS, Javascript, React, Node, Express and MongoDB. (I think you need to add a sentence here which summarizes your portfolio - something along the lines of “My work in this portfolio demonstrates my strengths with….)</p>
                </div>
                <div id='home-links-container'>
                    <Link id='projects-link' className='home-link' to='/projects'>Projects</Link>
                    <Link id='contact-link' className='home-link' to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    )
}