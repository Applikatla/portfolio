import { useState, useEffect } from 'react'
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
import { Preloader } from './components/Preloader'
import { MatrixRain } from './components/MatrixRain'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    let keySequence = '';
    const secretCode = 'matrix';

    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName.toLowerCase() === 'input' || e.target.tagName.toLowerCase() === 'textarea') return;

      keySequence += e.key.toLowerCase();
      if (keySequence.length > secretCode.length) {
        keySequence = keySequence.substring(keySequence.length - secretCode.length);
      }
      if (keySequence === secretCode) {
        setMatrixMode(prev => !prev);
        keySequence = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <CommandMenu />
          <MatrixRain isActive={matrixMode} />
          <ToastContainer theme={matrixMode ? "dark" : "light"} />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<PageTransition><Home /></PageTransition>}></Route>
              <Route path='/about' element={<PageTransition><About /></PageTransition>}></Route>
              <Route path='/contact' element={<PageTransition><Contact /></PageTransition>}></Route>
              <Route path='/projects' element={<PageTransition><Projects /></PageTransition>}></Route>
              <Route path='/experience' element={<PageTransition><Experience /></PageTransition>}></Route>
            </Routes>
          </AnimatePresence>
        </>
      )}
    </>
  )
}

export default App
