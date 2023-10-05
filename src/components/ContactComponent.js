import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/style.css'
import Header from './HeaderComponent'
import { Navbar } from './NavbarComponent'
import Footer from './FooterComponent'
export const Contact =()=>{
    return (
       
        <React.Fragment>
             <Header/>
            <Navbar/>
        <div className="contact-us">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to get in touch with us!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    <Footer/>
        <Link to='/'/>
       </React.Fragment>
        
    )
}
