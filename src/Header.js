import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './images/three.svg'

export const Header = (props) => {
    const { mobileView } = props
    const [menuOpen, setMenuOpen] = useState(false);
    
    const menuToggle = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            {mobileView === true &&
                <header id='topnav'>
                    <div id='header-name'>Tyler Randall</div>
                    <img src={MenuIcon} onClick={() => menuToggle()}/>
                    {menuOpen === true &&
                        <div className="overlay">
                            <div id='my-links'>
                                <Link className='mobile-link' to='/'>Home</Link>
                                <Link className='mobile-link' to='/projects'>Projects</Link>
                                <Link className='mobile-link' to='/contact'>Contact</Link>
                            </div>
                        </div>
                    }
                </header>
            }
            {mobileView === false && 
                <header id='topnav'>
                    <div id='header-name'>Tyler Randall</div>
                        <div id='my-links'>
                            <Link className='mobile-link' to='/'>Home</Link>
                            <Link className='mobile-link' to='/projects'>Projects</Link>
                            <Link className='mobile-link' to='/contact'>Contact</Link>
                        </div>
                </header>
            }
        </>
    )
}