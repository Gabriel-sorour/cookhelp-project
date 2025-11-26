import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chatbot from './pages/Chatbot'
import About from './pages/About'
import AppHeader from './componentes/AppHeader'
import AppFooter from './componentes/AppFooter'
import { useState } from 'react'

function App() {
  const [isFocused, setIsFocused] = useState(false);
  const [isOnBottom, seIsOnBottom] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chatbot"
            element={
              <Chatbot
                isFocused={isFocused}
                setIsFocused={setIsFocused}
                isOnBottom={isOnBottom}
                seIsOnBottom={seIsOnBottom}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <AppFooter
          isFocused={isFocused}
          isOnBottom={isOnBottom}
        />
      </div>
    </Router>
  )
}

export default App