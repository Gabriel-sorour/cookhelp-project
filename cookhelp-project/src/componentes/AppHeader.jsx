import { Link } from 'react-router-dom'

  function AppHeader() {

    return (
      <nav className="app-header">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/chatbot'>Chatbot</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
    )
  }

export default AppHeader;