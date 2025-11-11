import React from 'react'
import { BrowserRouter,Route,Routes,} from 'react-router-dom';
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import About from './components/About'
import './components/Navbar.css'
import Footer from './components/Footer'
import Offer from './components/Offer'
 

function App() {
  return(
    <BrowserRouter>
    <div style={{textAlign: 'center', marginTop:'10px'}}>
    <Navbar /> 
    <Routes>
    <Route path="/home"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={<Contact/>}/>
      <Route path="/offer" element={<Offer />}/>
    </Routes>
    </div>
    <Footer/>
     </BrowserRouter>
  )
}
export default App;