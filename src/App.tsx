
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Notes from './pages/Notes'
import Pyq from './pages/Pyq'

function App() {

  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/notes" element={<Notes />} />
          <Route path='/pyq' element={<Pyq/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
