import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import StudyDestinations from './components/Studydest'
import StatsSection from './components/stats'
import FeaturesSection from './components/Features'
import StudyProgramSearch from './components/StudyProgram'

import TrustedInstitutionsSection from './components/Partners'
import StudentPlatform from './components/Platform'


function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <StudentPlatform />
    <TrustedInstitutionsSection />
    <StatsSection />
    <StudyProgramSearch />
    <FeaturesSection />
    <StudyDestinations />
    <GetStarted />
    <Footer />
    </>
  )
}

export default App
