import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Contact } from './Contact';
import { Projects } from './Projects';

function App() {
  const [mobileView, setMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 480) {
      setMobileView(false)
    } else {
      setMobileView(true);
    }
  }

  useEffect(() => {
    if (window.innerWidth <= 480) {
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
          <Header mobileView={mobileView}/>
          <Routes>
            <Route path='/' element={<Home mobileView={mobileView} />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div> 
      </BrowserRouter>
  );
}

export default App;
