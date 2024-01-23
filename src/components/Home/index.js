// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkHomeContainer = isDarkTheme ? 'dark-home' : ''
      const darkHomeHeading = isDarkTheme ? 'dark-heading' : ''
      return (
        <>
          <Navbar />
          <div className={`home-container ${darkHomeContainer}`}>
            {isDarkTheme ? (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={`home-heading ${darkHomeHeading}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
