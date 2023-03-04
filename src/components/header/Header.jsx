import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/itsme_1.png'
import HeaderSocial from './HeaserSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="main__name">Tarun Badana</h1>
        <h4 className="text-light">Fullstack Developer</h4>
        <h4 className="text-light">UX/UI Designer</h4>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header