import '../styles/AppFooter.css'

function AppFooter({ isFocused, isOnBottom }) {

  return (
    <div className={isFocused && isOnBottom ? "app-footer-for-input" : "app-footer"}>
      <p>© 2025 cookhelp</p>
      <p>All rights reserved</p>
    </div>
  )
}

export default AppFooter;