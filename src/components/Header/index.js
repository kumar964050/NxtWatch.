import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  HeaderContainer,
  HeaderImage,
  HeaderTheme,
  HamburgerButton,
  LogoutButton,
  HeaderThemeContainer,
  ReactNavIcons,
  ListItem,
  UnorderedList,
  NavNames,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Header extends Component {
  state = {
    hamburger: false,
  }

  openHamburger = () => {
    this.setState(prevState => ({hamburger: !prevState.hamburger}))
  }

  render() {
    const {hamburger} = this.state
    return (
      <>
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
                <HeaderThemeContainer>
                  <HeaderTheme type="button" onClick={changeAppTheme}>
                    <FaMoon className="dark-theme" />
                  </HeaderTheme>

                  <HamburgerButton type="button" onClick={this.openHamburger}>
                    <GiHamburgerMenu className="dark-theme" />
                  </HamburgerButton>
                  <LogoutButton>
                    <FiLogOut className="dark-theme" />
                  </LogoutButton>
                </HeaderThemeContainer>
              </HeaderContainer>
            )
          }}
        </ThemeContext.Consumer>

        {hamburger && (
          <UnorderedList>
            <ListItem>
              <ReactNavIcons>
                <AiFillHome />
              </ReactNavIcons>
              <NavNames>Home</NavNames>
            </ListItem>
            <ListItem>
              <ReactNavIcons>
                <HiFire />
              </ReactNavIcons>
              <NavNames>Trending</NavNames>
            </ListItem>
            <ListItem>
              <ReactNavIcons>
                <SiYoutubegaming />
              </ReactNavIcons>
              <NavNames>Gaming</NavNames>
            </ListItem>
            <ListItem>
              <ReactNavIcons>
                <MdPlaylistAdd />
              </ReactNavIcons>
              <NavNames>Saved Videos</NavNames>
            </ListItem>
          </UnorderedList>
        )}
      </>
    )
  }
}

export default Header
