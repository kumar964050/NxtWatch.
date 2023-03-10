import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
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
  UnOrderedListCon,
  AccountProfile,
  LogoutMdButton,
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
    const {hamburger, themeImage} = this.state
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

            const headerBackground = darkTheme ? '#181818' : '#f9f9f9'
            const iconsColor = darkTheme ? '#ffffff' : '#0f0f0f'

            return (
              <HeaderContainer HeaderBg={headerBackground}>
                <HeaderImage src={headerLogo} alt="website logo" />
                <HeaderThemeContainer>
                  <HeaderTheme
                    IconsColor={iconsColor}
                    type="button"
                    onClick={changeAppTheme}
                  >
                    {darkTheme ? (
                      <FiSun className="dark-theme" />
                    ) : (
                      <FaMoon className="dark-theme" />
                    )}
                  </HeaderTheme>

                  <HamburgerButton
                    IconsColor={iconsColor}
                    type="button"
                    onClick={this.openHamburger}
                  >
                    <GiHamburgerMenu className="dark-theme" />
                  </HamburgerButton>
                  <AccountProfile
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <LogoutButton IconsColor={iconsColor}>
                    <FiLogOut className="dark-theme" />
                  </LogoutButton>
                  <LogoutMdButton>Logout</LogoutMdButton>
                </HeaderThemeContainer>
              </HeaderContainer>
            )
          }}
        </ThemeContext.Consumer>

        {hamburger && (
          <UnOrderedListCon>
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
          </UnOrderedListCon>
        )}
      </>
    )
  }
}

export default Header
