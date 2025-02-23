import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import Skills from './skills'
import Projects from './projects'
import Contact from './contact'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="skills" element={<Skills/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
