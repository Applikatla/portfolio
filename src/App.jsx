import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { CustomCursor } from './components/CustomCursor'
import { CommandMenu } from './components/CommandMenu'
import { PageTransition } from './components/PageTransition'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();

  return (
    <>
    <CustomCursor />
    <CommandMenu />
    <ToastContainer/>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<PageTransition><Home/></PageTransition>}></Route>
        <Route path='/about' element={<PageTransition><About/></PageTransition>}></Route>
        <Route path='/contact' element={<PageTransition><Contact/></PageTransition>}></Route>
        <Route path='/projects' element={<PageTransition><Projects/></PageTransition>}></Route>
        <Route path='/experience' element={<PageTransition><Experience/></PageTransition>}></Route>
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
