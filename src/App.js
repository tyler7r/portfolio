import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Home } from './Home';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Resume } from './Resume';

function App() {
  const [mobileView, setMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  const handleResize = () => {
    if (window.innerWidth >= 531) {
      setMobileView(false)
    } else {
      setMobileView(true);
    }
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [mobileView])

  useEffect(() => {
    if (window.innerWidth <= 531) {
      setMobileView(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return _ =>{
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
      <BrowserRouter>
        <div className="App">
          <Header mobileView={mobileView} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path='/' element={<Home mobileView={mobileView} />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </div> 
      </BrowserRouter>
  );
}

export default App;
