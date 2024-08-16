
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'

import Pyq from './pages/Pyq'
import SemesterPage from './pages/Semester'
import VideoList from './pages/Videos'
import { Analytics } from '@vercel/analytics/react'
function App() {

  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/pyq' element={<Pyq/>}/>
          <Route path='/resources' element={<SemesterPage/>}/>
          <Route path='/videos/:semester' element={<VideoList/>}/>
        </Routes>
        <Analytics />

      </BrowserRouter>
    </>
  )
}

export default App
