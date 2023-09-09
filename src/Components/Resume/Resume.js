import React from 'react'
import Header from '../Header/Header'
import AboutSection from '../About/AboutSection'
import Footer from '../Footer/Footer'
import Profile from './Profile'
import Education from '../Education/Education'

function Resume() {
  return (
    <>
        <Header/>
        <AboutSection/>
        <Profile/>
        <Education/>
        <Footer/> 
    </>
  )
}

export default Resume
