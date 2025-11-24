import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chatbot from './pages/Chatbot'
import About from './pages/About'
import AppHeader from './componentes/AppHeader'

function App() {

  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App