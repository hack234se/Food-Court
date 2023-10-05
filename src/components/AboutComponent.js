import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/style.css'
import Header from './HeaderComponent'
import { Navbar } from './NavbarComponent'
export const About=()=>{
    return (
       
        <React.Fragment>
             <Header/>
            <Navbar/>
        <div className="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <Link to='/'/>
        <p>
          Welcome to FudCourt, your one-stop destination for delicious and mouthwatering dishes. 
          We are passionate about delivering the finest culinary experiences to your table.
        </p>
        <p>
          Our team of expert chefs uses only the freshest ingredients to create culinary masterpieces that 
          tantalize your taste buds. From hearty breakfasts to elegant dinners, we offer a diverse range 
          of options that cater to all your cravings.
        </p>
        <p>
          At FudCourt, we believe that food is not just nourishment; it's an art form that brings people 
          together. Join us on this culinary journey and let your senses be delighted by our creations.
        </p>
      </div>
      
    </div>
       
       </React.Fragment>
        
    )
}
