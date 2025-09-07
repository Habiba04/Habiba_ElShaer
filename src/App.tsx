import { useState } from 'react'
import './App.css'
import PortfolioPage from './Pages/PortfolioPage'
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <PortfolioPage></PortfolioPage>       
      </div>
    </BrowserRouter>
  )
}

export default App
