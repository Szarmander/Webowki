import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import { routes } from './helpers/routes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <>
              <Route key={route.path} path={route.path} element={route.element}/>
            </>
          ))}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
