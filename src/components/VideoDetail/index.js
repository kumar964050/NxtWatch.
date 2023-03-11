import {formatDistanceToNow} from 'date-fns'
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
} from './styledComponent'

const VideoDetail = props => {
  const {videoDetail} = props
  const {id, publishedAt, title, thumbnailUrl, viewCount, channel} = videoDetail
  const {name, profileImageUrl} = channel
  const published = formatDistanceToNow(new Date(publishedAt))
  return (
    <VideoList>
      <VideoImage src={thumbnailUrl} alt="video thumbnail" />
      <ChannelContainer>
        <ChannelImageCon>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
        </ChannelImageCon>
        <ChannelDetailsCon>
          <ChannelTitle>{title}</ChannelTitle>
          <ChannelViewCon>
            <ChannelName>{name}</ChannelName>
            <ChannelViews>
              <ChannelSpan>.</ChannelSpan>
              {`${viewCount} views`}
              <ChannelSpan2>.</ChannelSpan2>
              {published}
            </ChannelViews>
          </ChannelViewCon>
        </ChannelDetailsCon>
      </ChannelContainer>
    </VideoList>
  )
}
export default VideoDetail
