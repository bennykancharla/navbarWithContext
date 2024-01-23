// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkAboutContainer = isDarkTheme ? 'dark-about' : ''
      const darkAboutHeading = isDarkTheme ? 'dark-about-heading' : ''
      return (
        <>
          <Navbar />
          <div className={`about-container ${darkAboutContainer}`}>
            {isDarkTheme ? (
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className={`about-heading ${darkAboutHeading}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
