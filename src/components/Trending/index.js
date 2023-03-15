import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
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
import './inde.css'

class Trending extends Component {
  state = {
    trendingList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
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
      console.log(newData)
      this.setState({trendingList: newData})
    }
  }

  render() {
    const {trendingList} = this.state
    return (
      <>
        <Header />
        <TrendingContainer>
          <FireContainer>
            <FireImage>
              <HiFire className="fire-icon" />
            </FireImage>
            <TrendingHeading>Trending</TrendingHeading>
          </FireContainer>
          <TrendingUl>
            {trendingList.map(each => (
              <TrendingVideo key={each.id} trendingVideo={each} />
            ))}
          </TrendingUl>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
