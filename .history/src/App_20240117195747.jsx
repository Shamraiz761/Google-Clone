import { useState } from 'react'
import Home from './pages/Home'
import Header from './components/header/Header'

import { BrowserRouter as Router , Routes , } from 'react-router-dom'

function App() {

  return (
   <div>
    <Header />
    <Home />
   </div>
  )
}

export default App
