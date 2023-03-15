import {formatDistanceToNow} from 'date-fns'
import {
  TrendingList,
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

const TrendingVideo = props => {
  const {trendingVideo} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    viewCount,
    channel,
  } = trendingVideo
  const {name, profileImageUrl} = channel
  const published = formatDistanceToNow(new Date(publishedAt))
  return (
    <TrendingList>
      <VideoImage src={thumbnailUrl} alt="video thumbnail" />
      <ChannelContainer>
        <ChannelImageCon>
          <ChannelImage src={profileImageUrl} alt="channel logo" />
        </ChannelImageCon>
        <ChannelDetailsCon>
          <ChannelTitle>{title}</ChannelTitle>
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
    </TrendingList>
  )
}
export default TrendingVideo
