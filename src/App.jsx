import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  const [char, setChar] = useState([])
  useEffect(() => {
    fetch('https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley')
    .then(res => res.json())
    .then(data => setChar(data) )
  },[])



  return (
   <>
    <Router>
      <Routes>
        <Route  path='/' element={<Home char={char} />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
