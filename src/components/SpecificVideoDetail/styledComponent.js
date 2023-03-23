import styled from 'styled-components'

export const VideoDetailContainer = styled.div`
  min-height: 100vh;
`
export const VideoResCon = styled.div`
  padding-top: 75px;
  padding-bottom: 25px;
  background: ${props => props.videoDetailBackground};

  @media screen and (min-width: 768px) {
    background: ${props => props.VideoBackground};
  }
`
export const VideoPlayer = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  padding-left: 4%;
  padding-right: 4%;
  margin-top: 20px;
  color: ${props => props.VideoPlayer};
  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`
export const VideoPublishCon = styled.div`
  padding-left: 4%;
  padding-right: 4%;

  @media screen and (min-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
`

export const ChannelViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #94a3b8;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
  }
`
export const ChannelViewCon = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    font-size: 12px;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
  }
`
export const ChannelSpan = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 25px;
  width: 6px;
  height: 20px;
  margin-right: 5px;
  color: #212121;
  @media screen and (min-width: 576px) {
    font-size: 12px;
    display: none;
  }
  @media screen and (min-width: 768px) {
  }
`
export const ChannelSpan2 = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 25px;
  width: 6px;
  height: 20px;
  margin-right: 5px;
  color: #212121;
  margin-left: 5px;
  @media screen and (min-width: 576px) {
    margin-top: -3px;
  }
  @media screen and (min-width: 768px) {
  }
`
export const DotContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    height: 40px;
  }
  @media screen and (min-width: 768px) {
  }
`

export const LikesContainer = styled.div`
  display: flex;
  color: #7e858e;
`

export const LikeIconCon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-weight: 600;
  color: ${props => props.Like};
`

export const LikeName = styled.p`
  margin-left: 10px;
`
export const HorizontalLine = styled.hr`
  color: #7e858e;
`
export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 20px;
  padding-left: 4%;
  padding-right: 4%;
  @media screen and (min-width: 768px) {
    padding-left: 0px;
  }
`
export const Profile = styled.img`
  height: 50px;
  margin-right: 10px;
`
export const SubscribesCon = styled.div`
  color: #7e858e;
`

export const ChannelName = styled.p`
  margin-top: 0px;
  color: #7e858e;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => props.VideoPlayer};
`

export const Subscribers = styled.p`
  color: #7e858e;
  margin-top: 0px;
  font-size: 14px;
  font-family: 'Roboto';
`
export const Description = styled.p`
  color: #7e858e;
  font-size: 11px;
  font-family: 'Roboto';
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 0px;
  color: ${props => props.VideoPlayer};
  @media screen and (min-width: 576px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 60px;
  }
`
export const LikeButton = styled.button`
  background: transparent;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: ${props => props.Like};
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 74%;
    margin-left: 20%;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 3%;
  }
`
export const NoSavedVideosH = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
`
export const SavedVideosHeadingH = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  color: ${props => props.SavedColor};
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const SavedVideosParagraphH = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 15px;
  margin-top: 15px;
  color: ${props => props.SavedColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SavedImageH = styled.img`
  width: 53%;
  height: 40%;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 38%;
  }
  @media screen and (min-width: 768px) {
    width: 34%;
  }
`
export const RetryButton = styled.button`
  border: 0px;
  background: #4f46e5;
  height: 35px;
  width: 85px;
  border-radius: 6px;
  color: #ffffff;
  font-family: 'Roboto';
  cursor: pointer;
  outline: none;
`
