import ThemeContext from '../../context/ThemeContext'
import BannerSection from '../BannerSection'
import Header from '../Header'
import {
  NoSavedVideosN,
  SavedVideosHeadingN,
  SavedVideosParagraphN,
  SavedImageN,
  GamingContainer,
} from './styledComponent'

const NotFound = () => {
  const renderNotFoundRoute = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const inputColor = darkTheme ? '#ffffff' : '#000000'
        const failureImage = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <NoSavedVideosN>
            <SavedImageN src={failureImage} alt="not found" />
            <SavedVideosHeadingN SavedColor={inputColor}>
              Page Not Found
            </SavedVideosHeadingN>
            <SavedVideosParagraphN>
              we are sorry, the page you requested could not be found.
            </SavedVideosParagraphN>
          </NoSavedVideosN>
        )
      }}
    </ThemeContext.Consumer>
  )

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const searchContainer = darkTheme ? '#000000' : '#f9f9f9'
        return (
          <>
            <Header />
            <GamingContainer GamingBackground={searchContainer}>
              <BannerSection />
              {renderNotFoundRoute()}
            </GamingContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default NotFound
