import {Component} from 'react'
import {FaMoon} from 'react-icons/fa'
import {HeaderContainer, HeaderImage, HeaderTheme} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme, changeTheme} = value
          const changeAppTheme = () => {
            changeTheme()
          }

          const headerLogo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <HeaderContainer>
              <HeaderImage src={headerLogo} />
              <HeaderTheme type="button" onClick={changeAppTheme}>
                <FaMoon />
              </HeaderTheme>
            </HeaderContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
