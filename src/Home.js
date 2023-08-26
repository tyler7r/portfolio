import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Headshot from './images/trandall_profile.jpg'

export const Home = (props) => {
    const [greeting, setGreeting] = useState('Hello');

    useEffect(() => {
        const possibleGreetings = [
            'Hello', 'Hola', 'Bonjour', 'Ciao', 'Olá', "G'day", 'Geia', 'Zdravo', 'Privet', 'Nǐ hǎo', "Kon’nichiwa", 'Guten tag'
        ]

        const randomGreeting = () => {
            const randomNum = Math.floor(Math.random() * 12);
            setGreeting(possibleGreetings[randomNum])
        }

        const cycleGreetings = () => {
            randomGreeting();
            setTimeout(cycleGreetings, 5000)
        }

        cycleGreetings();
    }, [])

    return (
        <div id='homepage'>
            <div id="homepage-content">
                <img id='headshot' alt='headshot' src={Headshot} />
                <div id="about-me-info">
                    <div id='about-me-container'>
                        <div id='about-me-hello'>{greeting}</div>
                        <div id='about-me-description'>About Me</div>
                        <p id='about-me'>I am a developer from Atlanta, Georgia who is passionate about building sites with simple solutions and in-depth, user-friendly UI. I recently completed The Odin Project and I wanted to display some of the work that I completed for it. The majority of these projects are completed with a combination of HTML, CSS, Javascript, React, Node, Express and MongoDB. My work demonstrates my proficiency with these skills and highlights some of my passions outside of development as well. Thanks for checking it out!</p>
                    </div>
                    <div id='home-links-container'>
                        <Link id='projects-link' className='home-link' to='/projects'>Projects</Link>
                        <Link id='resume-link' className='home-link' to='/resume'>Resume</Link>
                        <Link id='contact-link' className='home-link' to='/contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}