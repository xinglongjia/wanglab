import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'
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
    <div className="app">
        <Router basename={import.meta.env.BASE_URL}>
          <Header />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/team" element={<Team />} />
              <Route path="/news" element={<LabNews />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        <Footer />
      </Router>
    </div>
   )
}

export default App
