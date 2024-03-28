import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.style.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MainPage from "./components/MainPage/MainPage";
import StartingPage from "./components/StartingPage/StartingPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartingPage/>}/>
          <Route path="/adresses" element={<MainPage table="Adresses"/>}/>
          <Route path="/orderdetails" element={<MainPage table="OrderDetails"/>}/>
          <Route path="/orders" element={<MainPage table="Orders"/>}/>
          <Route path="/products" element={<MainPage table="Products"/>}/>
          <Route path="/users" element={<MainPage table="Users"/>}/>
          <Route path="*" element={<div>Nie udało się nic znaleźć :c</div>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
