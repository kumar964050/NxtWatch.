import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Header from '../Header'
import BannerSection from '../BannerSection'
import {
  VideoDetailContainer,
  VideoPlayer,
  VideoPublishCon,
  DotContainer,
  ChannelViews,
  ChannelSpan2,
  LikesContainer,
  LikeIconCon,
  LikeName,
  HorizontalLine,
  ProfileContainer,
  Profile,
  SubscribesCon,
  ChannelName,
  Subscribers,
  Description,
  LikeButton,
  VideoResCon,
  VideoDetailsContainer,
} from './styledComponent'
import './index.css'

const videoApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class SpecificVideoDetail extends Component {
  state = {
    videoDetail: {},
    isPlaying: false,
    videoState: videoApiStatus.initial,
    like: false,
    disLike: false,
    save: false,
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
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
      }
      const {publishedAt} = newData
      console.log(newData)
      newData.publishedAt = formatDistanceToNow(new Date(publishedAt))
      this.setState({videoDetail: newData, videoState: videoApiStatus.success})
    }
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
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

  changeLikeState = () => {
    this.setState(prevState => ({
      like: !prevState.like,
      disLike: false,
      save: false,
    }))
  }

  changeDisLikeState = () => {
    this.setState(prevState => ({
      like: false,
      disLike: !prevState.disLike,
      save: false,
    }))
  }

  changeSaveState = () => {
    this.setState(prevState => ({
      like: false,
      disLike: false,
      save: !prevState.save,
    }))
  }

  renderSuccess = () => {
    const {videoDetail, isPlaying} = this.state
    const {
      id,
      publishedAt,
      title,
      thumbnailUrl,
      viewCount,
      videoUrl,
      channel,
      description,
    } = videoDetail

    const {name, subscriberCount, profileImageUrl} = channel
    const control = true
    const playing = true
    const {like, disLike, save} = this.state
    const likeColor = like ? '#2563eb' : '#64748b'
    const disLikeColor = disLike ? '#2563eb' : '#64748b'
    const saveColor = save ? '#2563eb' : '#64748b'

    return (
      <VideoResCon>
        <BannerSection />
        <VideoDetailsContainer>
          <div className="responsive-container">
            <ReactPlayer
              url={videoUrl}
              controls={control}
              playing={playing}
              width="100%"
              height="100%"
            />
          </div>
          <VideoPlayer>{title}</VideoPlayer>
          <VideoPublishCon>
            <DotContainer>
              <ChannelViews>{viewCount} views</ChannelViews>
              <ChannelSpan2>.</ChannelSpan2>
              <ChannelViews>{publishedAt}</ChannelViews>
            </DotContainer>
            <LikesContainer>
              <LikeIconCon Like={likeColor}>
                <LikeButton Like={likeColor} onClick={this.changeLikeState}>
                  <BiLike className="like-icon" />
                </LikeButton>
                <LikeName>Like</LikeName>
              </LikeIconCon>
              <LikeIconCon Like={disLikeColor}>
                <LikeButton
                  Like={disLikeColor}
                  onClick={this.changeDisLikeState}
                >
                  <BiDislike className="like-icon" />
                </LikeButton>
                <LikeName>Dislike</LikeName>
              </LikeIconCon>
              <LikeIconCon Like={saveColor}>
                <LikeButton Like={saveColor} onClick={this.changeSaveState}>
                  <MdPlaylistAdd className="like-icon" />
                </LikeButton>
                <LikeName>Save</LikeName>
              </LikeIconCon>
            </LikesContainer>
          </VideoPublishCon>
          <HorizontalLine />
          <ProfileContainer>
            <Profile src={profileImageUrl} alt="channel logo" />
            <SubscribesCon>
              <ChannelName>{name}</ChannelName>
              <Subscribers>{subscriberCount} subscribers</Subscribers>
            </SubscribesCon>
          </ProfileContainer>
          <Description>{description}</Description>
        </VideoDetailsContainer>
      </VideoResCon>
    )
  }

  renderVideo = () => {
    const {videoState} = this.state

    switch (videoState) {
      case videoApiStatus.inProgress:
        return this.renderLoader()
      case videoApiStatus.success:
        return this.renderSuccess()

      default:
        return null
    }
  }

  render() {
    return (
      <VideoDetailContainer>
        <Header />
        {this.renderVideo()}
      </VideoDetailContainer>
    )
  }
}
export default SpecificVideoDetail
