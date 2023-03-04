import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_1.png'
import IMG2 from '../../assets/portfolio_2.png'
import IMG3 from '../../assets/portfolio_3.png'
import IMG4 from '../../assets/portfolio_4.png'
import IMG5 from '../../assets/portfolio_5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Music Player (Front-End)',
    github: "https://github.com/tarunbad/Music-Player-",
    demo: "https://tarunbad.github.io/Music-Player-/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tin-Dog Site (Front-End)',
    github: "https://github.com/tarunbad/Tindog-site",
    demo: " https://tarunbad.github.io/Tindog-site/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Flipkart Clone (Front-End)',
    github: "https://github.com/tarunbad/Flipkart-Clone",
    demo: "https://tarunbad.github.io/Flipkart-Clone/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Authentication Page (Back-End)',
    github: "https://github.com/tarunbad/Secrets-and-Authentication",
    demo: "https://tarunbad.github.io/Secrets-and-Authentication/"
  },
  {
    id: 5,
    image: IMG5,
    title: 'To-Do-List (Back-End)',
    github: "https://github.com/tarunbad/To-Do-List",
    demo: "https://tarunbad.github.io/To-Do-List/"
  },
  {
    id: 6,
    image: IMG6,
    title: 'In progress',
    github: "https://github.com",
    demo: "https://github.com"
  }
 
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className="btn">Github</a>
          <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio