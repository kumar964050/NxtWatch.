import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import {RxCross2} from 'react-icons/rx'
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
} from './styledComponent'
import BannerSection from '../BannerSection'

class Home extends Component {
  state = {
    searchInput: '',
    homeList: [],
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
      this.setState({homeList: newData})
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const homeLogo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <>
              <Header />
              <HomeContainer>
                <BannerSection />
                <HomeDetailContainer>
                  <HomeBanner
                    ImageUrl="https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png"
                    alt="Banner Background image"
                  >
                    <PremiumContainer>
                      <PremiumDetails>
                        <HomeLog src={homeLogo} alt="website logo" />
                        <HomeDescription>Buy Nxt Watch Premium prepaid plans with UPI</HomeDescription>
                        <HomeButton>GET IT NOW</HomeButton>
                        <CrossMarkCon>
                          <RxCross2 />
                        </CrossMarkCon>
                      </PremiumDetails>
                    </PremiumContainer>
                  </HomeBanner>
                </HomeDetailContainer>
              </HomeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
