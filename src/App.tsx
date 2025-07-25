import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Team from './pages/Team'
import LabNews from './pages/LabNews'
import Publications from './pages/Publications'
import Research from './pages/Research'
import Resources from './pages/Resources'
import Contact from './pages/Contact'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
      <Route path="/team" element={<Team />} />
      <Route path="/news" element={<LabNews />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>)
}

export default App
