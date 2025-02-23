import React from 'react'
import './Footer.css'
import insta from '../Assets/instalogo.png'
import linkedin from '../Assets/linkedinlogo.png'
import twitter from '../Assets/twitterlogo.png'
import github from '../Assets/githublogo.png'
// import footer-logo  from '../Assets/logo_big.png'
import logo from '../Assets/nobgnv.png'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img className='shopper' src={logo} alt="" />
                <h6>NIVI</h6>
                <ul className='footer-links'>
                    <a href="https://www.linkedin.com/in/nithin-kumar-taliyakula-7b3173284/" style={{ fontSize: '20px', textDecoration: 'none', color: '#bcbcbc', fontWeight: '200' }}><h5 className='port'>About</h5></a>
                    <a href="https://www.linkedin.com/in/nithin-kumar-taliyakula-7b3173284/" style={{ fontSize: '20px', textDecoration: 'none', color: '#bcbcbc', fontWeight: '200' }}><h5 className='port'>Contact</h5></a>
                    <a href="http://nithinp.netlify.app" style={{ color: 'white', textDecoration: 'none' }}><h5 className='port'>Portfolio</h5></a>
                    <a href="https://www.linkedin.com/in/nithin-kumar-taliyakula-7b3173284/" style={{ fontSize: '20px', textDecoration: 'none', color: '#bcbcbc', fontWeight: '200' }}><h5 className='port'>Connect</h5></a>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icons-container">
                        <a href="https://www.instagram.com/_nithin_ryan__/?hl=en"><img src={insta} alt="" /></a>
                    </div>
                    <div className="footer-icons-container">
                        <a href="https://www.linkedin.com/in/nithin-kumar-taliyakula-7b3173284/"><img src={linkedin} alt="" /></a>
                    </div>
                    <div className="footer-icons-container">
                        <a href="https://github.com/Nithin2104p"><img src={github} alt="" /></a>
                    </div>
                    <div className="footer-icons-container">
                        <a href="https://twitter.com/nithin_ryan_"><img src={twitter} alt="" /></a>
                    </div>

                </div>

            </div >

            <div className="footer-copyright">
                <hr />
                <p>copyright @ 2024 - All rights reserved</p>
            </div>
        </div >
    )
}

export default Footer
