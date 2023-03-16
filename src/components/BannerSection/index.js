import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
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

const BannerSection = () => (
  <UnOrderedListConB>
    <UnorderedListB>
      <Link to="/">
        <ListItemB>
          <ReactNavIconsB>
            <AiFillHome />
          </ReactNavIconsB>
          <NavNamesB>Home</NavNamesB>
        </ListItemB>
      </Link>
      <Link to="/trending">
        <ListItemB>
          <ReactNavIconsB>
            <HiFire />
          </ReactNavIconsB>
          <NavNamesB>Trending</NavNamesB>
        </ListItemB>
      </Link>
      <Link to="/gaming">
        <ListItemB>
          <ReactNavIconsB>
            <SiYoutubegaming />
          </ReactNavIconsB>
          <NavNamesB>Gaming</NavNamesB>
        </ListItemB>
      </Link>
      <ListItemB>
        <ReactNavIconsB>
          <MdPlaylistAdd />
        </ReactNavIconsB>
        <NavNamesB>Saved Videos</NavNamesB>
      </ListItemB>
    </UnorderedListB>
    <FooterContainer>
      <FooterHeading>CONTACT US</FooterHeading>
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
      <FooterDescription>
        Enjoy! Now to see your channels and recommendations!
      </FooterDescription>
    </FooterContainer>
  </UnOrderedListConB>
)
export default BannerSection
