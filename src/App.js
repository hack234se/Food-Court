import React from 'react';
import Home from './components/HomeComponent'
import {BrowserRouter} from 'react-router-dom'

import {Routes, Route} from 'react-router-dom'
import {Contact} from './components/ContactComponent'
import {About} from './components/AboutComponent'

function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Routes>
        
            <Route path='/' element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
