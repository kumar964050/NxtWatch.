import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {MdClose} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import VideoDetail from '../VideoDetail'
import {
  HomeContainer,
  HomeBanner,
  PremiumContainer,
  PremiumDetails,
  HomeLog,
  HomeDescription,
  HomeButton,
  CrossMarkCon,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideosContainer,
  VideoDetailUl,
  NoSavedVideos,
  SavedVideosHeading,
  SavedVideosParagraph,
  SavedImage,
} from './styledComponent'

import BannerSection from '../BannerSection'

const homeApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    searchInput: '',
    homeList: [],
    premium: true,
    homeRouteState: homeApiStatus.initial,
  }

  componentDidMount() {
    this.searchMovies()
  }

  searchMovies = async () => {
    this.setState({homeRouteState: homeApiStatus.initial})
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      this.setState({homeList: newData, homeRouteState: homeApiStatus.success})
    }
  }

  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  callTheServer = () => {
    this.searchMovies()
  }

  deletePremium = () => {
    this.setState({premium: false})
  }

  renderLoader = () => (
    <div className="popular-loader-container" data-testid="loader">
      <Loader
        type="TailSpin"
        color="#D81F26"
        height={50}
        width={50}
        className="popular-loader"
      />
    </div>
  )

  renderSuccess = () => {
    const {homeList} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const searchContainer = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const searchButton = darkTheme ? '#313131' : '#f9f9f9'
          const border = darkTheme ? '#313131' : '#94a3b8'
          const inputColor = darkTheme ? '#ffffff' : '#000000'

          return (
            <>
              {homeList.length > 0 ? (
                <VideoDetailUl VideoUl={searchContainer}>
                  {homeList.map(eachVideo => (
                    <VideoDetail key={eachVideo.id} videoDetail={eachVideo} />
                  ))}
                </VideoDetailUl>
              ) : (
                <NoSavedVideos>
                  <SavedImage
                    src="https://res.cloudinary.com/duezhxznc/image/upload/v1677152293/Background-Complete_ojhbus.png"
                    alt="no videos"
                  />
                  <SavedVideosHeading SavedColor={inputColor}>
                    Something went wrong. Please try again
                  </SavedVideosHeading>
                  <SavedVideosParagraph SavedColor={inputColor}>
                    you can save videos
                  </SavedVideosParagraph>
                </NoSavedVideos>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

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
    const {premium, homeList, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const searchContainer = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const searchButton = darkTheme ? '#313131' : '#f9f9f9'
          const border = darkTheme ? '#313131' : '#94a3b8'
          const inputColor = darkTheme ? '#ffffff' : '#000000'

          return (
            <>
              <Header />
              <HomeContainer HomeBackground={searchContainer}>
                <BannerSection />
                <HomeVideosContainer>
                  {premium && (
                    <HomeBanner
                      ImageUrl="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                      alt="Banner Background image"
                    >
                      <PremiumContainer>
                        <PremiumDetails>
                          <HomeLog
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="website logo"
                          />
                          <HomeDescription>
                            Buy Nxt Watch Premium prepaid plans with UPI
                          </HomeDescription>
                          <HomeButton>GET IT NOW</HomeButton>
                        </PremiumDetails>
                        <CrossMarkCon
                          type="button"
                          onClick={this.deletePremium}
                        >
                          <MdClose />
                        </CrossMarkCon>
                      </PremiumContainer>
                    </HomeBanner>
                  )}
                  <SearchContainer SearchConBackground={searchContainer}>
                    <SearchInput
                      SearchColor={searchContainer}
                      Border={border}
                      InputColor={inputColor}
                      type="search"
                      value={searchInput}
                      onChange={this.changeSearchInput}
                      placeholder="Search"
                    />
                    <SearchButton
                      SearchButtonColor={searchButton}
                      Border={border}
                      type="button"
                      onClick={this.callTheServer}
                    >
                      <BiSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderHomeRoute()}
                </HomeVideosContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
