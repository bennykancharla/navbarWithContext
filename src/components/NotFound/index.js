// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkNotFoundContainer = isDarkTheme ? 'dark-notfound' : ''
      const darkNotFoundHeading = isDarkTheme ? 'dark-notfound-heading' : ''
      const darkNotFoundPara = isDarkTheme ? 'dark-notfound-para' : ''
      return (
        <>
          <Navbar />
          <div className={`notfound-container ${darkNotFoundContainer}`}>
            <img
              className="notfound-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />

            <h1 className={`notfound-heading ${darkNotFoundHeading}`}>
              Lost Your Way?
            </h1>
            <p className={`notfound-para ${darkNotFoundPara}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
