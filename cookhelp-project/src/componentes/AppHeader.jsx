import { Link } from 'react-router-dom'
import '../styles/AppHeader.css'

  function AppHeader() {

    return (
      <nav className="app-header">
        <ul>
          <Link to='/'><li>Home</li></Link>
         <Link to='/chatbot'> <li>Chatbot</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </nav>
    )
  }

export default AppHeader;