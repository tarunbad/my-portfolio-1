import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b1hbzn4', 'template_km912zj', form.current, 'nfAcO7HyTtW5-HujV')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5> Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>tarunbadana@gmail.com</h5>
            <a href="mailto:tarunbadana22@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon"/>
            <h4>Telegram</h4>
            <h5>Username: tarunbad</h5>
            <a href="https://t.me/tarunbad">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>phone number: 9392676791</h5>
            <a href="https://wa.me/919392676791">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact