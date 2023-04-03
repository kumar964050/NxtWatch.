import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import BannerSection from '../BannerSection'
import TrendingVideo from '../TrendingVideo'
import {
  TrendingContainer,
  TrendingHeading,
  FireContainer,
  FireImage,
  TrendingUl,
  NoSavedVideos,
  SavedVideosHeading,
  SavedVideosParagraph,
  SavedImage,
} from './styledComponent'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {darkTheme, savedVideos} = value
      const searchContainer = darkTheme ? '#0f0f0f' : '#f9f9f9'
      const trendingBackground = darkTheme ? '#181818' : ' #f1f1f1'
      const fireBackground = darkTheme ? '#000000' : '#cbd5e1'
      const inputColor = darkTheme ? '#ffffff' : '#000000'
      console.log(savedVideos.length)

      return (
        <>
          <Header />
          <TrendingContainer
            TrendingBackground={searchContainer}
            data-testid="savedVideos"
          >
            <BannerSection />
            {savedVideos.length > 0 ? (
              <>
                <FireContainer FireBackground={trendingBackground}>
                  <FireImage FireImageBackground={fireBackground}>
                    <HiFire className="fire-icon" />
                  </FireImage>
                  <TrendingHeading TrendingHeading={inputColor}>
                    Saved Videos
                  </TrendingHeading>
                </FireContainer>
                <TrendingUl>
                  {savedVideos.map(each => (
                    <TrendingVideo key={each.id} trendingVideo={each} />
                  ))}
                </TrendingUl>
              </>
            ) : (
              <NoSavedVideos>
                <SavedImage
                  src="https://res.cloudinary.com/duezhxznc/image/upload/v1677152293/Background-Complete_ojhbus.png"
                  alt="no saved videos"
                />
                <SavedVideosHeading SavedColor={inputColor}>
                  No saved videos found
                </SavedVideosHeading>
                <SavedVideosParagraph SavedColor={inputColor}>
                  You can save your videos while watching them
                </SavedVideosParagraph>
              </NoSavedVideos>
            )}
          </TrendingContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
