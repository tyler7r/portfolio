import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import MenuIcon from './images/three.svg'
import LogoIcon from './images/site-logo.png'

export const Header = (props) => {
    const { mobileView, setMenuOpen, menuOpen } = props
    
    const menuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        setMenuOpen(false)
    }, [])

    return (
        <>
            {mobileView === true &&
                <header id='topnav'>
                    <Link to='/' id='header-name'>Tyler Randall</Link>
                    <img src={MenuIcon} id='menu-icon' onClick={() => menuToggle()}/>
                    {menuOpen === true &&
                        <div className="overlay">
                            <div id='close-menu' onClick={() => menuToggle()}>X</div>
                            <div id='mobile-links' onClick={() => menuToggle()}>
                                <Link className='mobile-link border' to='/'>Home</Link>
                                <Link className='mobile-link border' to='/projects'>Projects</Link>
                                <Link className='mobile-link border' to='/resume'>Resume</Link>
                                <Link className='mobile-link' to='/contact'>Contact</Link>
                            </div>
                            <img src={LogoIcon} alt='logo-icon' id='logo-icon' />
                        </div>
                    }
                </header>
            }
            {mobileView === false && 
                <header id='topnav'>
                    <div id='header-name'>Tyler Randall</div>
                        <div id='desktop-links'>
                            <Link className='desktop-link border' to='/'>Home</Link>
                            <Link className='desktop-link border' to='/projects'>Projects</Link>
                            <Link className='desktop-link border' to='/resume'>Resume</Link> 
                            <Link className='desktop-link' to='/contact'>Contact</Link>
                        </div>
                </header>
            }
        </>
    )
}