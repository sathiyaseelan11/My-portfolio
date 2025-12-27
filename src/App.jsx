import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/ui/Layout'
import Loading from './components/ui/Loading'
import CustomCursor from './components/ui/CustomCursor'

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

export default function App() {
  return (
    <Router>
      <CustomCursor />
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  )
}
