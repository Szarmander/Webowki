import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";

interface RouteElement {
  path: string,
  element: React.JSX.Element,
  title: string
}

// export const routes: RouteElement[] = []
export const routes: Array<RouteElement> = [
  {
    path: '/',
    element: <Home />,
    title: "Homepage"
  },
  {
    path: '/about',
    element: <About />,
    title: "About us"
  },
  {
    path: '/contact',
    element: <Contact />,
    title: "Contact"
  }
];

