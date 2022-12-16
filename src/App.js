import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Partical from './components/Partical'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
