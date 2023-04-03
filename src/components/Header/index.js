import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome, AiOutlinePlus} from 'react-icons/ai'
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
  CrossMark,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'
import 'reactjs-popup/dist/index.css'
import './index.css'

class Header extends Component {
  openHamburger = () => {
    this.setState(prevState => ({hamburger: !prevState.hamburger}))
  }

  confirmButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    const {match} = this.props
    const {path} = match
    let homeRoute
    let trendingRoute
    let gamingRoute
    let savedRoute
    switch (path) {
      case '/':
        homeRoute = true
        trendingRoute = false
        gamingRoute = false
        savedRoute = false
        break
      case '/trending':
        homeRoute = false
        trendingRoute = true
        gamingRoute = false
        savedRoute = false
        break
      case '/gaming':
        homeRoute = false
        trendingRoute = false
        gamingRoute = true
        savedRoute = false
        break
      case '/saved-videos':
        homeRoute = false
        trendingRoute = false
        gamingRoute = false
        savedRoute = true
        break
      default:
        homeRoute = false
        trendingRoute = false
        gamingRoute = false
        savedRoute = false
        break
    }
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

            const applyColor = () => (darkTheme ? ' #424242' : '#e2e8f0')
            const searchContainer = darkTheme ? '#0f0f0f' : '#f9f9f9'

            const headerBackground = darkTheme ? '#212121' : '#ffffff'
            const iconsColor = darkTheme ? '#ffffff' : '#0f0f0f'

            const navElements = darkTheme ? ' #f9f9f9' : '#181818'
            const navIcons = darkTheme ? '#909090' : ' #313131'

            const homeBackground = homeRoute ? applyColor() : 'transparent'
            const trendingBackground = trendingRoute
              ? applyColor()
              : 'transparent'
            const gamingBackground = gamingRoute ? applyColor() : 'transparent'
            const savedBackground = savedRoute ? applyColor() : 'transparent'

            console.log(homeRoute)

            const homeIconColor = homeRoute ? 'icon-color' : 'transparent'
            const trendingIconColor = trendingRoute
              ? 'icon-color'
              : 'transparent'
            const gamingIconColor = gamingRoute ? 'icon-color' : 'transparent'
            const savedIconColor = savedRoute ? 'icon-color' : 'transparent'

            const homeFontWeight = homeRoute ? 600 : 400
            const trendingFontWeight = trendingRoute ? 600 : 400
            const gamingFontWeight = gamingRoute ? 600 : 400
            const savedFontWeight = savedRoute ? 600 : 400

            return (
              <HeaderContainer HeaderBg={headerBackground}>
                <Link to="/">
                  <HeaderImage src={headerLogo} alt="website logo" />
                </Link>
                <HeaderThemeContainer>
                  <HeaderTheme
                    IconsColor={iconsColor}
                    data-testid="theme"
                    type="button"
                    onClick={changeAppTheme}
                  >
                    {darkTheme ? (
                      <FiSun className="dark-theme" />
                    ) : (
                      <FaMoon className="dark-theme" />
                    )}
                  </HeaderTheme>

                  <Popup
                    modal
                    trigger={
                      <button type="button" className="trigger-button">
                        <HamburgerButton IconsColor={iconsColor} type="button">
                          <GiHamburgerMenu className="dark-theme" />
                        </HamburgerButton>
                      </button>
                    }
                  >
                    {close => (
                      <UnOrderedListCon Ullist={searchContainer}>
                        <CrossMark
                          NavElement={navElements}
                          type="button"
                          onClick={() => close()}
                        >
                          <AiOutlinePlus />
                        </CrossMark>
                        <UnorderedList Ullist={searchContainer}>
                          <Link to="/" className="list-style">
                            <ListItem Background={homeBackground}>
                              <ReactNavIcons NavIcons={navIcons}>
                                <AiFillHome className={homeIconColor} />
                              </ReactNavIcons>
                              <NavNames
                                NavElement={navElements}
                                FontWeight={homeFontWeight}
                              >
                                Home
                              </NavNames>
                            </ListItem>
                          </Link>
                          <Link to="/trending" className="list-style">
                            <ListItem Background={trendingBackground}>
                              <ReactNavIcons NavIcons={navIcons}>
                                <HiFire className={trendingIconColor} />
                              </ReactNavIcons>
                              <NavNames
                                NavElement={navElements}
                                FontWeight={trendingFontWeight}
                              >
                                Trending
                              </NavNames>
                            </ListItem>
                          </Link>
                          <Link to="/gaming" className="list-style">
                            <ListItem Background={gamingBackground}>
                              <ReactNavIcons NavIcons={navIcons}>
                                <SiYoutubegaming className={gamingIconColor} />
                              </ReactNavIcons>
                              <NavNames
                                NavElement={navElements}
                                FontWeight={gamingFontWeight}
                              >
                                Gaming
                              </NavNames>
                            </ListItem>
                          </Link>
                          <Link to="/saved-videos" className="list-style">
                            <ListItem Background={savedBackground}>
                              <ReactNavIcons NavIcons={navIcons}>
                                <MdPlaylistAdd className={savedIconColor} />
                              </ReactNavIcons>
                              <NavNames
                                NavElement={navElements}
                                FontWeight={savedFontWeight}
                              >
                                Saved Videos
                              </NavNames>
                            </ListItem>
                          </Link>
                        </UnorderedList>
                      </UnOrderedListCon>
                    )}
                  </Popup>

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
                    {close => (
                      <>
                        <PopupDiv popupBackground={headerBackground}>
                          <LogoutDescription IconsColor={iconsColor}>
                            Are you sure you want logout?
                          </LogoutDescription>
                          <LogoutButtons>
                            <CancelButton type="button" onClick={() => close()}>
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
                      </>
                    )}
                  </Popup>

                  <Popup
                    modal
                    trigger={
                      <button type="button" className="trigger-button">
                        <LogoutMdButton>Logout</LogoutMdButton>
                      </button>
                    }
                  >
                    {close => (
                      <>
                        <PopupDiv popupBackground={headerBackground}>
                          <LogoutDescription IconsColor={iconsColor}>
                            Are you sure you want logout?
                          </LogoutDescription>
                          <LogoutButtons>
                            <CancelButton type="button" onClick={() => close()}>
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
                      </>
                    )}
                  </Popup>
                </HeaderThemeContainer>
              </HeaderContainer>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default withRouter(Header)
