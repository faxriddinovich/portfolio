import React,{useRef} from 'react'
import { NavLink } from 'react-router-dom'
import profilepic from '../../images/profile.jpg'
import { HiOutlineBars3 } from 'react-icons/hi2'
import './header.css'
import './responsive-header.css'

function Header() {

    const headerRef = useRef(null)

    function toggleHeader(){
        let right = headerRef.current.style.right
        if(right==='0px'){
            headerRef.current.style.right="-100%"
        }
        else headerRef.current.style.right="0"
    }

  return (
    <>
        <header className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 header-section'>
                        <div className='logo'>
                            <img src={profilepic} title='Some'/>
                            <h1 className='title'>Asliddin Eliboyev</h1>
                        </div>
                        <div className='links'>
                            <nav className='navbar'>
                                <ul className='navbar-links'>
                                    <li className='navbar-links-item'>
                                        <NavLink to={'/'} active>Home</NavLink>
                                    </li>
                                    
                                    <li className='navbar-links-item'>
                                        <NavLink to={'/about'}>Resume</NavLink>
                                    </li>
                                    
                                    <li className='navbar-links-item'>
                                        <NavLink to={'/portfolio'}>Portfolio</NavLink>
                                    </li>
                                    
                                    <li className='navbar-links-item'>
                                        <NavLink to={'/blog'}>Blog</NavLink>
                                    </li>
                                </ul>
                            </nav>

                            <div className='responsive-header' ref={headerRef}>
                                <ul className='responsive-header-list'>
                                <li className='responsive-header-list-item'>
                                        <NavLink to={'/'} active>Home</NavLink>
                                    </li>
                                    
                                    <li className='responsive-header-list-item'>
                                        <NavLink to={'/about'}>Resume</NavLink>
                                    </li>
                                    
                                    <li className='responsive-header-list-item'>
                                        <NavLink to={'/portfolio'}>Portfolio</NavLink>
                                    </li>
                                    
                                    <li className='responsive-header-list-item'>
                                        <NavLink to={'/blog'}>Blog</NavLink>
                                    </li>
                                </ul>
                            </div>

                            <button type='button' className='topnav-btn' onClick={toggleHeader}>
                                <HiOutlineBars3/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    </>
  )
}

export default Header
