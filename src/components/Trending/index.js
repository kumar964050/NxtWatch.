import {Component} from 'react'
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
      this.setState({trendingList: newData})
    }
  }

  render() {
    const {trendingList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const searchContainer = darkTheme ? '#0f0f0f' : '#f9f9f9'
          const trendingBackground = darkTheme ? '#181818' : ' #f1f1f1'
          const fireBackground = darkTheme ? '#000000' : '#cbd5e1'
          const inputColor = darkTheme ? '#ffffff' : '#000000'

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
                    Trending
                  </TrendingHeading>
                </FireContainer>
                <TrendingUl>
                  {trendingList.map(each => (
                    <TrendingVideo key={each.id} trendingVideo={each} />
                  ))}
                </TrendingUl>
              </TrendingContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
