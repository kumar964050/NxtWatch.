import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import './index.css'
import {
  ReactNavIconsB,
  ListItemB,
  UnorderedListB,
  NavNamesB,
  UnOrderedListConB,
  FooterHeading,
  FooterImageCon,
  FooterImages,
  FooterDescription,
  FooterContainer,
} from './styledComponent'

const BannerSection = props => {
  const {match} = props
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
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const bannerBackground = darkTheme ? '#212121' : ' #ffffff'
        const navElements = darkTheme ? ' #f9f9f9' : '#181818'
        const navIcons = darkTheme ? '#909090' : ' #313131'

        const applyColor = () => (darkTheme ? ' #424242' : '#e2e8f0')

        const homeBackground = homeRoute ? applyColor() : 'transparent'
        const trendingBackground = trendingRoute ? applyColor() : 'transparent'
        const gamingBackground = gamingRoute ? applyColor() : 'transparent'
        const savedBackground = savedRoute ? applyColor() : 'transparent'

        console.log(homeRoute)

        const homeIconColor = homeRoute ? 'icon-color' : 'transparent'
        const trendingIconColor = trendingRoute ? 'icon-color' : 'transparent'
        const gamingIconColor = gamingRoute ? 'icon-color' : 'transparent'
        const savedIconColor = savedRoute ? 'icon-color' : 'transparent'

        const homeFontWeight = homeRoute ? 600 : 400
        const trendingFontWeight = trendingRoute ? 600 : 400
        const gamingFontWeight = gamingRoute ? 600 : 400
        const savedFontWeight = savedRoute ? 600 : 400

        return (
          <UnOrderedListConB
            BannerBackground={bannerBackground}
            data-testid="banner"
          >
            <UnorderedListB>
              <Link to="/" className="list-style">
                <ListItemB background={homeBackground}>
                  <ReactNavIconsB NavIcons={navIcons}>
                    <AiFillHome className={homeIconColor} />
                  </ReactNavIconsB>
                  <NavNamesB
                    NavElement={navElements}
                    FontWeight={homeFontWeight}
                  >
                    Home
                  </NavNamesB>
                </ListItemB>
              </Link>
              <Link to="/trending" className="list-style">
                <ListItemB background={trendingBackground}>
                  <ReactNavIconsB NavIcons={navIcons}>
                    <HiFire className={trendingIconColor} />
                  </ReactNavIconsB>
                  <NavNamesB
                    NavElement={navElements}
                    FontWeight={trendingFontWeight}
                  >
                    Trending
                  </NavNamesB>
                </ListItemB>
              </Link>
              <Link to="/gaming" className="list-style">
                <ListItemB background={gamingBackground}>
                  <ReactNavIconsB NavIcons={navIcons}>
                    <SiYoutubegaming className={gamingIconColor} />
                  </ReactNavIconsB>
                  <NavNamesB
                    NavElement={navElements}
                    FontWeight={gamingFontWeight}
                  >
                    Gaming
                  </NavNamesB>
                </ListItemB>
              </Link>
              <Link to="/saved-videos" className="list-style">
                <ListItemB background={savedBackground}>
                  <ReactNavIconsB NavIcons={navIcons}>
                    <MdPlaylistAdd className={savedIconColor} />
                  </ReactNavIconsB>
                  <NavNamesB
                    NavElement={navElements}
                    FontWeight={savedFontWeight}
                  >
                    Saved Videos
                  </NavNamesB>
                </ListItemB>
              </Link>
            </UnorderedListB>
            <FooterContainer>
              <FooterHeading FooterDes={navElements}>CONTACT US</FooterHeading>
              <FooterImageCon>
                <FooterImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <FooterImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <FooterImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </FooterImageCon>
              <FooterDescription FooterDes={navElements}>
                Enjoy! Now to see your channels and recommendations!
              </FooterDescription>
            </FooterContainer>
          </UnOrderedListConB>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default withRouter(BannerSection)
