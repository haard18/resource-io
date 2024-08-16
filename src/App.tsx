
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Pyq from './pages/Pyq'
import SemesterPage from './pages/Semester'
import VideoList from './pages/Videos'
import { Analytics } from '@vercel/analytics/react'
import SkillsPage from './pages/Skills'
import {SpeedInsights} from '@vercel/speed-insights/react'
import Home from './pages/Home'
import {AuroraBackgroundDemo} from './pages/Landing'
import OrgChartTree from './pages/tree'
function App() {

  
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/notes" element={<Home />} />
          <Route path='/' element={<AuroraBackgroundDemo/>}/>
          <Route path='/pyq' element={<Pyq/>}/>
          <Route path='/resources' element={<SemesterPage/>}/>
          <Route path='/videos/:semester' element={<VideoList/>}/>
          <Route path='/skills' element={<SkillsPage/>}/>
          <Route path='/tree/:skill' element={<OrgChartTree/>}/>
        </Routes>
        <Analytics />
        <SpeedInsights/>

      </BrowserRouter>
    </>
  )
}

export default App
