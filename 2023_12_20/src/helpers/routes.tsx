import About from "../pages/About";
import Homepage from "../pages/Homepage";

interface RouteElement {
  path: string,
  element: React.JSX.Element,
  title: string
}

// export const routes: RouteElement[] = []
export const routes: Array<RouteElement> = [
  {
    path: '/',
    element: <Homepage />,
    title: "Homepage"
  },
  {
    path: '/about',
    element: <About />,
    title: "About us"
  }
];

