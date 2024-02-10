import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./helpers/routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component}/>
          ))}
        </Routes>
      
      <Footer/>
      </BrowserRouter>
    </>
  )
}
