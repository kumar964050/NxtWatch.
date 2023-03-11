import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import {BiSearch} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import VideoDetail from '../VideoDetail'
import {
  HomeContainer,
  HomeDetailContainer,
  HomeBanner,
  PremiumContainer,
  PremiumDetails,
  HomeLog,
  HomeDescription,
  HomeButton,
  CrossMarkCon,
  VideosUl,
  SearchContainer,
  SearchInput,
  SearchButton,
  HomeVideosContainer,
  VideoDetailUl,
} from './styledComponent'
import BannerSection from '../BannerSection'

class Home extends Component {
  state = {
    searchInput: '',
    homeList: [],
    premium: true,
  }

  componentDidMount() {
    this.searchMovies()
  }

  searchMovies = async () => {
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
      console.log(newData)
      this.setState({homeList: newData})
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

  render() {
    const {premium, homeList, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          return (
            <>
              <Header />
              <HomeContainer>
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
                  <SearchContainer>
                    <SearchInput
                      type="text"
                      value={searchInput}
                      onChange={this.changeSearchInput}
                      placeholder="Search"
                    />
                    <SearchButton type="button" onClick={this.callTheServer}>
                      <BiSearch />
                    </SearchButton>
                  </SearchContainer>
                  <VideoDetailUl>
                    {homeList.map(eachVideo => (
                      <VideoDetail key={eachVideo.id} videoDetail={eachVideo} />
                    ))}
                  </VideoDetailUl>
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
