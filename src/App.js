  import React from 'react'
  import { BrowserRouter,Route,Routes,} from 'react-router-dom';
  import Home from './components/Home'
  import Contact from './components/Contact'
  import Navbar from './components/Navbar'
  import About from './components/About'
  import './components/Navbar.css'
  import Footer from './components/Footer'
  import Offer from './components/Offer'
  import Service from './components/Service'
  import Sea from './components/Sea'
  import './components/Sea.css'
  import Air from './components/Air'
  import './components/Air.css'
  import Custom from './components/Custom'
  import './components/Custom.css'
  import Warehousing from './components/Warehousing'
  import './components/Warehousing.css'


  function App() {
    return(
      <BrowserRouter>
      <div style={{textAlign: 'center', marginTop:'10px'}}>
      <Navbar /> 
      <Routes>
        <Route path="/"element={<Home/>}/>
      <Route path="/home"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
        <Route path="/offer" element={<Offer />}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Sea" element={<Sea/>}/>
        <Route path="/Air" element={<Air/>}/>
        <Route path="/Custom" element={<Custom/>}/>
        <Route path="/Warehousing" element={<Warehousing/>}/>
      </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    )
  }
  export default App;