import React from 'react'
import coding_img from '../../images/coding.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import './aboutsection.css'
import './responsive-aboutsection.css'

function AboutSection() {
  return (
    <>
        <section className='about-section mt-3'> 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div className='image-box'>
                            <img src={coding_img} title='Coding photo'/>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='about-box mt-5'>
                            <h1>Hello! I'm Asliddin Eliboev</h1>
                            <p>As a frontend developer, I have a passion for creating visually
                                appealing and user-friendly websites. With a strong background in HTML, 
                                CSS, and JavaScript, I specialize in developing interactive and responsive 
                                interfaces that provide an optimal user experience.
                            </p>
                        </div>

                        <div className='account-box'>
                            <h3>Checkout my accounts:</h3>
                            <div className='about-box_accounts'>
                                <a href='https://github.com/faxriddinovich' target='_blank'>
                                    <FaGithub/>
                                </a>

                                <a href='https://www.linkedin.com/in/asliddin-eliboyev/' target='_blank'>
                                    <FaLinkedin/>
                                </a>
                            </div>
                            <div className='number-box mt-5'>
                                <p>Also contact me here:</p>
                                <span>Phone number:<b className='mx-2'>+99890-505-5211</b></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='about-section_title'>About</h1>
        </section>
    </>
  )
}

export default AboutSection
