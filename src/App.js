import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import About from './components/About'
import './components/Navbar.css'
import Footer from './components/Footer'
import { BrowserRouter,Route,Routes,} from 'react-router-dom';
 

function App() {
  return(
    <BrowserRouter>
    <div style={{textAlign: 'center', marginTop:'10px'}}>
    <Navbar /> 
    <Routes>
      <Route path="/home"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/contact"element={<Contact/>}/>
    </Routes>
    </div>
    <Footer/>
     </BrowserRouter>
  )
}
export default App;