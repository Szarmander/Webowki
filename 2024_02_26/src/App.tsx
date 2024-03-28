import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { routes } from './helpers/routes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import * as S from './App.styled'

function App() {

  return (
    <S.Main>
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
    </S.Main>
  )
}

export default App
