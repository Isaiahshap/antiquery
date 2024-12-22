import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes here */}
      {/* e.g. <Route path="/about" element={<About />} /> */}
    </Routes>
  )
}

export default App
