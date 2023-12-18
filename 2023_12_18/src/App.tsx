import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App
