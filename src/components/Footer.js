import React from 'react'
import './Footer.css'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'


const Footer = () => {

    return(
        <div>
            <div className='foot'>
                <p>Réalisé par Kamel Belkheiri</p>
                <div className='social-box'>
                    <a href='https://www.linkedin.com/in/kamelbelkheiri/' target='_blank' rel="noopener noreferrer"><img src={linkedin} alt=''/></a> 
                    <a href='https://github.com/kamel-b'target='_blank' rel="noopener noreferrer"><img src={github} alt=''/></a>
                </div>
            </div>
        </div>
    )
}


export default Footer