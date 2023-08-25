import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import MenuIcon from './images/three.svg'

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
                    <div id='header-name'>Tyler Randall</div>
                    <img src={MenuIcon} onClick={() => menuToggle()}/>
                    {menuOpen === true &&
                        <div className="overlay">
                            <div id='mobile-links'>
                                <Link className='mobile-link' to='/'>Home</Link>
                                <Link className='mobile-link' to='/projects'>Projects</Link>
                                <Link className='mobile-link' to='/resume'>Resume</Link>
                                <Link className='mobile-link' to='/contact'>Contact</Link>
                            </div>
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