import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    const size = window.innerWidth
    useEffect(() => {
        console.log(size);
    }, [size])

    return (
        <header>
            <div id='header-name'></div>
        </header>
    )
}