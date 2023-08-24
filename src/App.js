import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Contact } from './Contact';
import { Projects } from './Projects';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div> 
      </BrowserRouter>
  );
}

export default App;
