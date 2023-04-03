import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import BannerSection from '../BannerSection'
import TrendingVideo from '../TrendingVideo'
import ThemeContext from '../../context/ThemeContext'
import {
  TrendingContainer,
  TrendingHeading,
  FireContainer,
  FireImage,
  TrendingUl,
  NoSavedVideosH,
  SavedVideosHeadingH,
  SavedVideosParagraphH,
  SavedImageH,
  RetryButton,
  LoaderSpinner,
} from './styledComponent'
import './inde.css'

const homeApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingList: [],
    homeRouteState: homeApiStatus.initial,
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    try {
      this.setState({homeRouteState: homeApiStatus.inProgress})
      const url = 'https://apis.ccbp.in/videos/trending'
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
          publishedAt: each.published_at,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
          channel: {
            name: each.channel.name,
            profileImageUrl: each.channel.profile_image_url,
          },
        }))
        this.setState({
          trendingList: newData,
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
    this.getTrendingVideos()
  }

  renderLoader = () => (
    <LoaderSpinner data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </LoaderSpinner>
  )

  renderSuccess = () => {
    const {trendingList} = this.state

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
                  <HiFire className="fire-icon" />
                </FireImage>
                <TrendingHeading TrendingHeading={inputColor}>
                  Trending
                </TrendingHeading>
              </FireContainer>
              <TrendingUl>
                {trendingList.map(each => (
                  <TrendingVideo key={each.id} trendingVideo={each} />
                ))}
              </TrendingUl>
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
          const searchContainer = darkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <TrendingContainer
                TrendingBackground={searchContainer}
                data-testid="trending"
              >
                <BannerSection />
                {this.renderHomeRoute()}
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
