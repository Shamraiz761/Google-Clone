import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/header/Header'

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import { Search } from '@mui/icons-material'

function App() {

  return (
   <div>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    

    </Router>
   </div>
  )
}

export default App
