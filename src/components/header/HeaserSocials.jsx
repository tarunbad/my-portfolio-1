import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
const HeaserSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tarun-badana-60942923a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/tarunbad" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/ta.runxx3" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaserSocials