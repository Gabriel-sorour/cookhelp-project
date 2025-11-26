import { Link, useLocation } from 'react-router-dom'
import '../styles/AppHeader.css'

function AppHeader() {

  const location = useLocation();

  return (
    <nav className="app-header">
      <ul>
        <Link
          className={location.pathname === '/' ? 'link-hover' : ''}
          to='/'
        >
          <li>Home</li>
        </Link>

        <Link
          className={location.pathname === '/chatbot' ? 'link-hover' : ''}
          to='/chatbot'
        >
          <li>Chatbot</li>
        </Link>

        <Link
          className={location.pathname === '/about' ? 'link-hover' : ''}
          to='/about'
        >
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default AppHeader;