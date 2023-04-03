import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import BannerSection from '../BannerSection'
import GamingDetails from '../GamingDetails'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingContainer,
  TrendingHeading,
  FireContainer,
  FireImage,
  GamingUl,
  NoSavedVideosH,
  SavedVideosHeadingH,
  SavedVideosParagraphH,
  SavedImageH,
  RetryButton,
  LoaderSpinner,
} from './styledComponent'

const homeApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamingList: [],
    homeRouteState: homeApiStatus.initial,
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    try {
      this.setState({homeRouteState: homeApiStatus.inProgress})
      const url = 'https://apis.ccbp.in/videos/gaming'
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok === true) {
        const newData = data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
        }))
        this.setState({
          gamingList: newData,
          homeRouteState: homeApiStatus.success,
        })
      } else {
        this.setState({homeRouteState: homeApiStatus.failure})
      }
    } catch (e) {
      this.setState({homeRouteState: homeApiStatus.failure})
    }
  }

  refreshThePage = () => {
    this.getGamingVideos()
  }

  renderLoader = () => (
    <LoaderSpinner data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderSpinner>
  )

  renderSuccess = () => {
    const {gamingList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const trendingBackground = darkTheme ? '#181818' : ' #f1f1f1'
          const fireBackground = darkTheme ? '#000000' : '#cbd5e1'
          const inputColor = darkTheme ? '#ffffff' : '#000000'

          return (
            <>
              <FireContainer FireBackground={trendingBackground}>
                <FireImage FireImageBackground={fireBackground}>
                  <SiYoutubegaming className="fire-icon" />
                </FireImage>
                <TrendingHeading GamingName={inputColor}>
                  Gaming
                </TrendingHeading>
              </FireContainer>
              <GamingUl>
                {gamingList.map(each => (
                  <GamingDetails key={each.id} gamingDetails={each} />
                ))}
              </GamingUl>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderFailure = () => (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const inputColor = darkTheme ? '#ffffff' : '#000000'
        const failureImage = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <NoSavedVideosH>
            <SavedImageH src={failureImage} alt="failure view" />
            <SavedVideosHeadingH SavedColor={inputColor}>
              Oops! Something Went Wrong
            </SavedVideosHeadingH>
            <SavedVideosParagraphH SavedColor={inputColor}>
              We are having some trouble to complete your request. Please try
              again.
            </SavedVideosParagraphH>
            <RetryButton type="button" onClick={this.refreshThePage}>
              Retry
            </RetryButton>
          </NoSavedVideosH>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderHomeRoute = () => {
    const {homeRouteState} = this.state

    switch (homeRouteState) {
      case homeApiStatus.inProgress:
        return this.renderLoader()
      case homeApiStatus.success:
        return this.renderSuccess()
      case homeApiStatus.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const searchContainer = darkTheme ? '#000000' : '#f9f9f9'
          return (
            <>
              <Header />
              <GamingContainer
                GamingBackground={searchContainer}
                data-testid="gaming"
              >
                <BannerSection />
                {this.renderHomeRoute()}
              </GamingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
