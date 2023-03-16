import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import {
  VideoDetailContainer,
  VideoPlayer,
  VideoPublishCon,
  DotContainer,
  ChannelViews,
  ChannelSpan2,
} from './styledComponent'
import './index.css'

class SpecificVideoDetail extends Component {
  state = {
    videoDetail: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const newData = {
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        title: data.video_details.title,
        thumbnailUrl: data.video_details.thumbnail_url,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.subscriber_count,
        },
      }
      this.setState({videoDetail: newData})
    }
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {videoDetail, isPlaying} = this.state
    const {
      id,
      publishedAt,
      title,
      thumbnailUrl,
      viewCount,
      videoUrl,
      channel,
    } = videoDetail
    const control = true
    const playing = true

    return (
      <VideoDetailContainer>
        <Header />
        <div className="video-container">
          <div className="responsive-container">
            <ReactPlayer
              url={videoUrl}
              controls={control}
              playing={playing}
              width={360}
              height={200}
            />
          </div>
        </div>
        <VideoPlayer>{title}</VideoPlayer>
        <VideoPublishCon>
          <DotContainer>
            <ChannelViews>{viewCount}</ChannelViews>
            <ChannelSpan2>.</ChannelSpan2>
            <ChannelViews>He</ChannelViews>
          </DotContainer>
        </VideoPublishCon>
      </VideoDetailContainer>
    )
  }
}
export default SpecificVideoDetail
