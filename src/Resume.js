import React from 'react';
import './resume.css'
import ResumePreview from './images/resume.png'

export const Resume = (props) => {
    return (
        <div id='resume-section'>
            <div id='resume-title'>Resume</div>
            <img id='resume-preview' src={ResumePreview} alt='resume-preview' />
        </div>
    )
}