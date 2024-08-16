
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Pyq from './pages/Pyq'
import SemesterPage from './pages/Semester'
import VideoList from './pages/Videos'
import { Analytics } from '@vercel/analytics/react'
import SkillsPage from './pages/Skills'

import Home from './pages/Home'
function App() {

  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/pyq' element={<Pyq/>}/>
          <Route path='/resources' element={<SemesterPage/>}/>
          <Route path='/videos/:semester' element={<VideoList/>}/>
          <Route path='/skills' element={<SkillsPage/>}/>
        </Routes>
        <Analytics />

      </BrowserRouter>
    </>
  )
}

export default App
