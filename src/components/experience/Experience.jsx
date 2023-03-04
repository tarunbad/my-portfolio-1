import React from 'react'
import './experience.css'
import {GiArrowScope} from 'react-icons/gi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
             </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>Java Script</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>React JS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
        {/* end of frontend */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>Express JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>My SQL</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience