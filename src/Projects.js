import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './projects.css';
import GithubIcon from './images/github.svg'
import OpenProjectIcon from './images/open-project.svg'
import OdinbookImage from './images/odinbook-screenshot.jpg'
import ShoppingCartImage from './images/shopping-cart.jpg'
import KnightTravailsImage from './images/knight-travails.jpg'
import CalculatorImage from './images/calculator.jpg'
import MemoryCardImage from './images/memory-card.jpg'
import WaldoImage from './images/waldo.jpg'

export const Projects = (props) => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const handleProjectHover = (e) => {
        const project = e.target.id;
        setHoveredProject(project);
    }

    const handleLeaveHover = () => {
        console.log(hoveredProject);
        setHoveredProject(null)
    }

    return (
        <div id='project-section'>
            <div id='project-section-title'>Projects</div>
            <div id='projects-container'>
                <div className='project-card'>
                    <div className="project-info">
                        <div className='project-title'>The Odinbook</div>
                        <p className='project-description'>The Odinbook is a social media app modeled after Facebook. This project is my first fully built out MERN-stack application. Post your thoughts and photos, edit your profile and send out friend requests to other users. The site uses two front-end clients (one for users and one for guests) in order to give those who don't want to signup a chance to interact with the site as well.</p>
                    </div>
                    <div className='project-preview-container' onMouseEnter={(e) => handleProjectHover(e)} onMouseLeave={() => handleLeaveHover()}>
                        <img id='project1' src={OdinbookImage} className='project-preview' alt='odinbook-preview' />
                        {hoveredProject === 'project1' &&
                            <div className='project-links'>
                                <Link to='https://github.com/tyler7r/TOP-odin-book'><img className='project-btn' src={GithubIcon} alt='github-icon' /></Link>
                                <Link to='https://top-odinbook.netlify.app/odinbook/login'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                            </div>
                        }
                    </div>
                </div>
                <div className='project-card'>
                    <div className="project-info">
                        <div className='project-title'>Where's Waldo</div>
                        <p className='project-description'>My take on a the classic Where's Waldo game. Compete against others in a race to find Waldo, Odlaw and the Wizard on a couple of the famous maps. This project was my first full-stack application. The leaderboards update after each round and they withstand due to their link with the firebase database.</p>
                    </div>
                    <div className='project-preview-container' onMouseEnter={(e) => handleProjectHover(e)} onMouseLeave={() => handleLeaveHover()}>
                        <img id='project2' src={WaldoImage} className='project-preview' alt='waldo-preview' />
                        {hoveredProject === 'project2' &&
                            <div className='project-links'>
                                <Link to='https://github.com/tyler7r/TOP-photo-tagging'><img className='project-btn' src={GithubIcon} alt='github-icon' /></Link>
                                <Link to='https://top-photo-tagging.netlify.app/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                            </div>
                        }
                    </div>
                </div>
                <div className='project-card'>
                    <div className="project-info">
                        <div className='project-title'>Shopping Cart</div>
                        <p className='project-description'>As a member of the professional Ultimate Frisbee team, the Atlanta Hustle. I thought it would be fun to combine my passions and recreate our team's store. You can scroll through popular tickets and gear to see what might be of interest and add them to your cart. This project expanded my knowledge on React by introducing me to its router system. (Let me know if you can find the easter eggs that I added.)</p>
                    </div>
                    <div className='project-preview-container' onMouseEnter={(e) => handleProjectHover(e)} onMouseLeave={() => handleLeaveHover()}>
                        <img id='project3' src={ShoppingCartImage} className='project-preview' alt='shopping-cart-preview' />
                        {hoveredProject === 'project3' &&
                            <div className='project-links'>
                                <Link to='https://github.com/tyler7r/TOP-shopping-cart/tree/tyler7r-patch-1'><img className='project-btn' src={GithubIcon} alt='github-icon' /></Link>
                                <Link to='https://tyler7r.github.io/TOP-shopping-cart/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                            </div>
                        }
                    </div>
                </div>
                <div className='project-card'>
                    <div className="project-info">
                        <div className='project-title'>Survivor Memory Game</div>
                        <p className='project-description'>The Survivor Memory game puts your knowledge of Survivor 44 Cast members to the test. In my first major project using React and focusing on object-oriented-programming the user must click on each cast member without repeating. The trick is that the cast members move after each click. Choose your level and test your knowledge!</p>
                    </div>
                    <div className='project-preview-container' onMouseEnter={(e) => handleProjectHover(e)} onMouseLeave={() => handleLeaveHover()}>
                        <img id='project4' src={MemoryCardImage} className='project-preview' alt='memory-game-preview' />
                        {hoveredProject === 'project4' &&
                            <div className='project-links'>
                                <Link to='https://github.com/tyler7r/TOP-memory-card'><img className='project-btn' src={GithubIcon} alt='github-icon' /></Link>
                                <Link to='https://top-memory-card.netlify.app/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                            </div>
                        }
                    </div>
                </div>
                <div className='project-card'>
                    <div className="project-info">
                        <div className='project-title'>Knight Travails</div>
                        <p className='project-description'>The Knight Travails forges a knight's path from any chess square to any other square in as few moves as possible. This project was a test of my abilities to use recursive functions.</p>
                    </div>
                    <div className='project-preview-container' onMouseEnter={(e) => handleProjectHover(e)} onMouseLeave={() => handleLeaveHover()}>
                        <img id='project5' src={KnightTravailsImage} className='project-preview' alt='knight-travails-preview' />
                        {hoveredProject === 'project5' &&
                            <div className='project-links'>
                                <Link to='https://github.com/tyler7r/TOP-knight-travails'><img className='project-btn' src={GithubIcon} alt='github-icon' /></Link>
                                <Link to='https://tyler7r.github.io/TOP-knight-travails/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                            </div>
                        }
                    </div>
                </div>
                <div className='project-card'>
                    <div className="project-info">
                        <div className='project-title'>Calculator</div>
                        <p className='project-description'>This is the first project that I was proud enough to host to GitHub Pages. Modeled after the calculator that you see on iOS, this project laid the foundation for my knowledge of Javascript.</p>
                    </div>
                    <div className='project-preview-container' onMouseEnter={(e) => handleProjectHover(e)} onMouseLeave={() => handleLeaveHover()}>
                        <img id='project6' src={CalculatorImage} className='project-preview' alt='calculator-preview' />
                        {hoveredProject === 'project6' &&
                            <div className='project-links'>
                                <Link to='https://github.com/tyler7r/TOP-calculator'><img className='project-btn' src={GithubIcon} alt='github-icon' /></Link>
                                <Link to='https://tyler7r.github.io/TOP-calculator/'><img className='project-btn' src={OpenProjectIcon} alt='open-project' /></Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}