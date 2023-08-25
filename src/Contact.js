import React from 'react'
import './contact.css'

export const Contact = (props) => {
    return (
        <div id='contact-section'>
            <div id='contact-title'>Contact</div>
            <div id='contact-message'>Looking forward to hearing from you.</div>
            <div className='contact-info-container' id='phone-container'>
                <div className='contact-info-title'>
                    Phone
                </div>
                <a href='tel:4049847244' id='phone'>404-984-7244</a>
            </div>
            <div className='contact-info-container' id='email-container'>
                <div className='contact-info-title'>
                    Email
                </div>
                <a href='mailto:tyler7r@gmail.com' id='email'>tyler7r@gmail.com</a>
            </div>
        </div>
    )
}