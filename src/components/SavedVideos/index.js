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
} from './styledComponent'

const SavedVideos = () => {
  const noSavedVideos = () => <p>Hello</p>

  return (
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
            <TrendingContainer TrendingBackground={searchContainer}>
              <BannerSection />
              <FireContainer FireBackground={trendingBackground}>
                <FireImage FireImageBackground={fireBackground}>
                  <HiFire className="fire-icon" />
                </FireImage>
                <TrendingHeading TrendingHeading={inputColor}>
                  Saved Videos
                </TrendingHeading>
              </FireContainer>
              <TrendingUl>
                {savedVideos.length > 0
                  ? savedVideos.map(each => (
                      <TrendingVideo key={each.id} trendingVideo={each} />
                    ))
                  : noSavedVideos()}
              </TrendingUl>
            </TrendingContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
