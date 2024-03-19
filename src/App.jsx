
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar/NavBar'
function App() {

  return (
  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route path='/' element={<HomePage/>}  />

  </Routes>
  </BrowserRouter>
  )
}

export default App
