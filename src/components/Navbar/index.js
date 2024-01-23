// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const darkThemeNavbarContainer = isDarkTheme ? 'dark-navbar' : ''

      const darkThemeOptions = isDarkTheme ? 'dark-option' : ''

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <>
          <nav className={`nav-container ${darkThemeNavbarContainer}`}>
            {isDarkTheme ? (
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
              />
            ) : (
              <img
                className="website-logo"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
            )}
            <ul className="options-container">
              <Link to="/" className="link-item">
                <li className={`option-item ${darkThemeOptions}`}>Home</li>
              </Link>
              <Link to="/about" className="link-item">
                <li className={`option-item ${darkThemeOptions}`}>About</li>
              </Link>
            </ul>
            <button
              className="theme-button"
              type="button"
              onClick={onClickThemeButton}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <img
                  className="theme-logo"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              ) : (
                <img
                  className="theme-logo"
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                />
              )}
            </button>
          </nav>
          <hr />
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
