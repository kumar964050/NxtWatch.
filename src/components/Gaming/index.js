import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import BannerSection from '../BannerSection'
import GamingDetails from '../GamingDetails'
import {
  GamingContainer,
  TrendingHeading,
  FireContainer,
  FireImage,
  GamingUl,
} from './styledComponent'

class Gaming extends Component {
  state = {
    gamingList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
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
      this.setState({gamingList: newData})
    }
  }

  render() {
    const {gamingList} = this.state
    return (
      <>
        <Header />
        <GamingContainer>
          <BannerSection />
          <FireContainer>
            <FireImage>
              <SiYoutubegaming className="fire-icon" />
            </FireImage>
            <TrendingHeading>Gaming</TrendingHeading>
          </FireContainer>
          <GamingUl>
            {gamingList.map(each => (
              <GamingDetails key={each.id} gamingDetails={each} />
            ))}
          </GamingUl>
        </GamingContainer>
      </>
    )
  }
}

export default Gaming
