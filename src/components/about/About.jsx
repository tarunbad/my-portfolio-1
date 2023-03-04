import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from  'react-icons/fa'
import {FaUsers, FiUsers} from 'react-icons/fi'
import {BsCodeSlash} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image"/>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className = "about__card">
                  <FaAward className="about__icon"/>
                  <h3>GRADUATION</h3>
                  <small className='text__content'>Currently pursuing 3rd year in Computer Science in Amrita Vishwa Vidyapeetham</small>
              </article>

              <article className = "about__card">
                  <BsCodeSlash className="about__icon"/>
                  <h3>Code Base</h3>
                  <small>MERN Stack Development</small>
              </article>

              <article className = "about__card">
                  <VscFolderLibrary className="about__icon"/>
                  <h3>PROJECTS</h3>
                  <small>20+ completed projects</small>
              </article>
            </div>

            <p>
            As a highly driven and accomplished Computer Science Professional, I am seeking a dynamic and challenging career opportunity where I can utilize my expertise in coding and further enhance my skills. My passion for designing and integrating complex systems is complemented by intuitive problem-solving abilities, with a particular strength in MERN stack development (Full stack). With a proven track record of delivering results, I am committed to exceeding expectations and driving success for my team and organization. As such, I welcome the opportunity to apply my skills and experience to contribute to the growth and success of a forward-thinking company.           
            </p>
            <div className='personal__details'>
            <p>DOB : <a>22 MARCH 2003 </a><br /> Residence :<a> INDIA</a><br /> Address : <a>Vizag,Andhra Pradesh</a><br />Email : <a>tarunbadana22@gmail.com</a><br />Phone : <a>+91-9392676791</a></p>
            </div>
            <a href="#contact" className="btn btn-primary">Lets talk</a>
          </div>
      </div>

    </section>
  )
}

export default About