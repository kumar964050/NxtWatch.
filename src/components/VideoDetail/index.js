import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  VideoList,
  VideoImage,
  ChannelContainer,
  ChannelImageCon,
  ChannelImage,
  ChannelDetailsCon,
  ChannelTitle,
  ChannelName,
  ChannelViews,
  ChannelViewCon,
  ChannelSpan,
  ChannelSpan2,
  DotContainer,
} from './styledComponent'

const VideoDetail = props => {
  const {videoDetail} = props
  const {id, publishedAt, title, thumbnailUrl, viewCount, channel} = videoDetail
  const {name, profileImageUrl} = channel
  const published = formatDistanceToNow(new Date(publishedAt))
  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value

        const videoDescription = darkTheme ? '#ffffff' : '#000000'

        return (
          <VideoList>
            <Link to={`/videos/${id}`}>
              <VideoImage src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <ChannelContainer>
              <ChannelImageCon>
                <ChannelImage src={profileImageUrl} alt="channel logo" />
              </ChannelImageCon>
              <ChannelDetailsCon>
                <ChannelTitle VideoDescription={videoDescription}>
                  {title}
                </ChannelTitle>
                <ChannelViewCon>
                  <ChannelName>{name}</ChannelName>
                  <DotContainer>
                    <ChannelSpan>.</ChannelSpan>
                    <ChannelViews>{viewCount}</ChannelViews>
                    <ChannelSpan2>.</ChannelSpan2>
                    <ChannelViews>{published}</ChannelViews>
                  </DotContainer>
                </ChannelViewCon>
              </ChannelDetailsCon>
            </ChannelContainer>
          </VideoList>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoDetail
