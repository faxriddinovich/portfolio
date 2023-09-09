import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {LiaTelegramPlane} from 'react-icons/lia'
import './footer.css'
import './responsive-footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <hr/>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6 mx-auto'>
                <div className='footer-social mb-5 pt-2'>
                    <ul className='footer-social-list'>
                        <li className='footer-social-list-item'>
                            <a href='https://twitter.com/asleshka_?t=WeFe_OeK3hf5dn9nBAHJ8w&s=09' target='_blank' className='social-link'>
                                <BsTwitter className="twitter"/>
                            </a>
                        </li>

                        <li className='footer-social-list-item'>
                            <a href='https://www.instagram.com/asleshka_/' target='_blank' className='social-link'>
                                <BsInstagram className="instagram"/>
                            </a>
                        </li>

                        <li className='footer-social-list-item'>
                            <a href='https://t.me/f_tuit' target='_blank' className='social-link'>
                                <LiaTelegramPlane className="telegram"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h1 className='text-center'>Contact me:</h1>
                    <h2 className='text-center'>eliboyevasleshka@gmail.com</h2>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
