import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
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
  PopupDiv,
  LogoutDescription,
  CancelButton,
  ConfirmButton,
  LogoutButtons,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import 'reactjs-popup/dist/index.css'
import './index.css'

class Header extends Component {
  state = {
    hamburger: false,
  }

  openHamburger = () => {
    this.setState(prevState => ({hamburger: !prevState.hamburger}))
  }

  confirmButton = () => {
    const {history} = this.props
    history.replace('/login')
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

            const headerBackground = darkTheme ? '#212121' : '#ffffff'
            const iconsColor = darkTheme ? '#ffffff' : '#0f0f0f'

            return (
              <HeaderContainer HeaderBg={headerBackground}>
                <Link to="/">
                  <HeaderImage src={headerLogo} alt="website logo" />
                </Link>
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

                  <Popup
                    modal
                    trigger={
                      <button type="button" className="trigger-button">
                        <LogoutButton IconsColor={iconsColor}>
                          <FiLogOut className="dark-theme" />
                        </LogoutButton>
                        <LogoutMdButton>Logout</LogoutMdButton>
                      </button>
                    }
                  >
                    <PopupDiv popupBackground={headerBackground}>
                      <LogoutDescription IconsColor={iconsColor}>
                        Are you sure you want logout?
                      </LogoutDescription>
                      <LogoutButtons>
                        <CancelButton type="button" onClick={this.cancelButton}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton
                          type="button"
                          onClick={this.confirmButton}
                        >
                          Confirm
                        </ConfirmButton>
                      </LogoutButtons>
                    </PopupDiv>
                  </Popup>
                </HeaderThemeContainer>
              </HeaderContainer>
            )
          }}
        </ThemeContext.Consumer>

        {hamburger && (
          <UnOrderedListCon>
            <UnorderedList>
              <Link to="/">
                <ListItem>
                  <ReactNavIcons>
                    <AiFillHome />
                  </ReactNavIcons>
                  <NavNames>Home</NavNames>
                </ListItem>
              </Link>
              <Link to="/trending">
                <ListItem>
                  <ReactNavIcons>
                    <HiFire />
                  </ReactNavIcons>
                  <NavNames>Trending</NavNames>
                </ListItem>
              </Link>
              <Link to="/gaming">
                <ListItem>
                  <ReactNavIcons>
                    <SiYoutubegaming />
                  </ReactNavIcons>
                  <NavNames>Gaming</NavNames>
                </ListItem>
              </Link>
              <Link to="/saved-videos">
                <ListItem>
                  <ReactNavIcons>
                    <MdPlaylistAdd />
                  </ReactNavIcons>
                  <NavNames>Saved Videos</NavNames>
                </ListItem>
              </Link>
            </UnorderedList>
          </UnOrderedListCon>
        )}
      </>
    )
  }
}

export default Header
