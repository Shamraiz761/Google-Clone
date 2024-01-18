import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/header/Header'

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'

function App() {

  return (
   <div>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Home />} />
      
    <Home />

    </Router>
   </div>
  )
}

export default App
