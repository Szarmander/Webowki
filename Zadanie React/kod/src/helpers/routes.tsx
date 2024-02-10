import AboutUs from "@/pages/AboutUs"
import Clicker from "@/pages/Clicker"
import Contact from "@/pages/Contact"
import Home from "@/pages/Home"

interface RouteElement {
  path: string,
  component: JSX.Element,
  title: string
}


export const routes: RouteElement[] = [
  {
    path: '/',
    component: <Home/>,
    title: 'Home'
  },
  {
    path: '/about-us',
    component: <AboutUs/>,
    title: 'About us'
  },
  {
    path: '/contact',
    component: <Contact/>,
    title: 'Contact'
  },
  {
    path: '/clicker',
    component: <Clicker/>,
    title: 'Clicker'
  },
]