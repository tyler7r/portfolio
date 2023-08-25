import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import InstagramIcon from './images/instagram.svg'
import LinkedinIcon from './images/linkedin.svg'
import GithubIcon from './images/github.svg'

export const Footer = (props) => {
    return (
        <footer>
            <div className='contact-container' id='phone-container'>
                <div className='contact-title'>
                    Phone
                </div>
                <a href='tel:4049847244' id='phone-number'>404-984-7244</a>
            </div>
            <div className='contact-container' id='email-container'>
                <div className='contact-title'>
                    Email
                </div>
                <a href='mailto:tyler7r@gmail.com' id='email-address'>tyler7r@gmail.com</a>
            </div>
            <div className='contact-container' id='follow-me-container'>
                <div className='contact-title'>Follow Me</div>
                <div id="media-btns-container">
                    <Link to='https://github.com/tyler7r?tab=repositories' className='media-btn'><img src={GithubIcon} /></Link>
                    <Link to='https://www.linkedin.com/in/tyler-randall-496828289' className='media-btn'><img src={LinkedinIcon} /></Link>
                    <Link to='https://www.instagram.com/tyler7randall/' className='media-btn'><img src={InstagramIcon} /></Link>
                </div>
            </div>
        </footer>
    )
}