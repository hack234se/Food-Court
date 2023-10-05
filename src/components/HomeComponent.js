import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Navbar} from './NavbarComponent'
import '../assets/style.css'
import Biriyani from '../images/Biriyani.jpg'
import Dessert from '../images/dessert.jpg'
import Lunch from '../images/lunch.jpg'
import Dinner from '../images/dinner.jpg'
function Home(){
    return (
        <React.Fragment>
            <Header/>
            <Navbar/>
    <div className="home">
      
        <h2>Welcome to Food Court,</h2>
        <p>Your one-stop destination for delicious meals!</p>
     
      <section className="main">
        <div className="main-item">
          <img src={Biriyani} alt="biriyani" />
          <h2>Main Cuisines</h2>
          <p>Try our mouthwatering cuisines made with fresh ingredients.</p>
        </div>
        <div className="main-item">
          <img src={Dessert} alt="Dish" />
          <h2>Desserts</h2>
          <p>Indulge in our delectable desserts made from scratch.</p>
        </div>
      </section> 
      <section className="menu">
        <h2>Our Menu</h2>
        <div className="menu-item">
          <img src={Lunch} alt="Menu Item" />
          <h3>Lunch</h3>
          <p>Experience the fiery flavors of our signature dishes.</p>
        </div>
        <div className="menu-item">
          <img src={Dinner} alt="Menu" />
          <h3>Dinner</h3>
          <p>Fresh food served with a variety of mouthwatering sauces.</p>
        </div>
       
      </section> 
     </div>     
            
        <Footer/>
       
        </React.Fragment>
    )
}
export default Home;