import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import Pyq from './pages/Pyq';
import SemesterPage from './pages/Semester';
import VideoList from './pages/Videos';
import { Analytics } from '@vercel/analytics/react';
import SkillsPage from './pages/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './pages/Home';
import { AuroraBackgroundDemo } from './pages/Landing';
import OrgChartTree from './pages/tree';
import  { useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics with your Measurement ID
    ReactGA.initialize('G-KLDJPT9M55'); // Replace with your Google Analytics Measurement ID

    // Log the initial page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    // Track page views when the route changes
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/notes" element={<Home />} />
        <Route path="/" element={<AuroraBackgroundDemo />} />
        <Route path="/pyq" element={<Pyq />} />
        <Route path="/resources" element={<SemesterPage />} />
        <Route path="/videos/:semester" element={<VideoList />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/tree/:skill" element={<OrgChartTree />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
