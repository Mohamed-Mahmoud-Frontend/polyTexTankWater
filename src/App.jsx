
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar/NavBar'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Product from './pages/Proudacts'
import Contact from './pages/Contact'
import Services from './pages/Services'
import PageWater from './pages/PageWater'
function App() {

  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route path='/' element={<HomePage/>}  />
  <Route path='/About' element={<About/>}  />
  <Route path='/Gallery' element={<Gallery/>}  />
  <Route path='/Product' element={<Product/>}  />
  <Route path='/Contact' element={<Contact/>}  />
  <Route path='/services' element={<Services/>}  />
  <Route path='/PageWater' element={<PageWater/>}  />

  </Routes>
  </BrowserRouter>
  )
}

export default App
