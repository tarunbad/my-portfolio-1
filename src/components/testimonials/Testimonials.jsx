// import React from 'react'
// import './testimonials.css'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR2 from '../../assets/avatar2.jpg'
// import AVTR3 from '../../assets/avatar3.jpg'
// import AVTR4 from '../../assets/avatar4.jpg'

// import { Pagination } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// const data =[
//   {
//     id: 1,
//     avatar: AVTR1,
//     name: 'Tine ',
//     review: 'lo rem hbkudv ug ug iugc hbbvkuhdvbkjhv ijv ih lsicoisd voijdb oisdv ojbv oudvbo udvb oudvb djv ISDb suhdbDuhiudb duhbiudh isdu biudhb oduv oduv'
//   },
//   {
//     id: 2,
//     avatar: AVTR2,
//     name: 'Tine ',
//     review: 'lo rem hbkudv ug ug iugc'
//   },
//   {
//     id: 3,
//     avatar: AVTR3,
//     name: 'Tine ',
//     review: 'lo rem hbkudv ug ug iugc'
//   },
//   {
//     id: 4,
//     avatar: AVTR4,
//     name: 'Tine ',
//     review: 'lo rem hbkudv ug ug iugc'
//   }
// ]


// const Testimonials = () => {
//   return (
//     <section id='portfolio'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <Swiper className="container portfolio__container"
//       // install Swiper modules
//       modules={[ Pagination]}
//       spaceBetween={40}
//       slidesPerView={1}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}>
//         {
//           data.map(({avatar, name, review},index) => {
//             return (
//               <SwiperSlide  className="testimonial">
//                 {/* <div className="client__avatar">
//                 <img src={avatar} />    
//                 </div>
//                 <h5 className="client__name">{name}</h5>
//                 <small className="client__review">{review}</small> */}
//                 <article className="portfolio__item">
//           <div className="portfolio__item-image">
//             <img src={avatar} alt={name} />
//           </div>
//           <h3>{name}</h3>
//           <div className='portfolio__item-cta'>
//           <a href={name} className="btn">Github</a>
//           <a href={review} className="btn btn-primary" target="_blank">Live Demo</a>
//           </div>
//         </article>
//               </SwiperSlide>
//             )
//           })
//         }
//       </Swiper>
//     </section>
//   )
// }

// export default Testimonials


// =============================================================================

import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/Coursera(full stack).jpg'
import IMG2 from '../../assets/Coursera(UX-Main).jpg'
import IMG3 from '../../assets/Coursera(Google Cloud).jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Full-Stack Web Development with React',
    title1: '-By The Hong Kong University Of Science and Technology',
    github: "https://github.com/tarunbad/Music-Player-",
    demo: "https://tarunbad.github.io/Music-Player-/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Google UX Design',
    title1: '-By Google',
    github: "https://github.com/tarunbad/Tindog-site",
    demo: " https://tarunbad.github.io/Tindog-site/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    title1: '-By Google Cloud',
    github: "https://github.com/tarunbad/Flipkart-Clone",
    demo: "https://tarunbad.github.io/Flipkart-Clone/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My</h5>
      <h2>Certifications</h2>
      

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,title1, github, demo}) => {
            return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h4>{title1}</h4>
          <div className='portfolio__item-cta'>
          {/* <a href={github} className="btn"></a> */}
          {/* <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a> */}
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