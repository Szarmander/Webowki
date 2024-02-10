import { routes } from '@/helpers/routes';
import './navbar.scss'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div id="app-nav">
      <div className="navbar-brand">
        App name
      </div>
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            {routes.map((route) => (
              <li className='nav-item' key={route.path}>
                <Link className='nav-link' to={route.path}>{route.title}</Link>
              </li>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  )
}