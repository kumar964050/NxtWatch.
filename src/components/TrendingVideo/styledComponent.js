import styled from 'styled-components'

export const TrendingList = styled.li`
  height: 310px;
  @media screen and (min-width: 576px) {
    height: 300px;
    display: flex;
  }
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 100%;
  }
`
export const TrendingImage = styled.img`
  height: 200px;
  width: 100%;

  @media screen and (min-width: 576px) {
    margin-right: 16px;
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    height: 75%;
    width: 407px;
  }
`
export const TrendingContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-start;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  @media screen and (min-width: 576px) {
    height: 45%;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
  }
`
export const TrendingImageCon = styled.div`
  height: 40px;
  margin-right: 12px;
  @media screen and (min-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const ChannelDetailsCon = styled.div`
  eight: 80px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    height: 50%;
  }
`
export const ChannelImage = styled.img`
  height: 30px;
  @media screen and (min-width: 576px) {
    height: 58%;
  }
`
export const ChannelTitle = styled.p`
  font-family: 'Roboto';
  margin-top: 0px;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 0px;
  color: ${props => props.VideoDescription};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: 11px;
  color: #94a3b8;
  @media screen and (min-width: 576px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const ChannelViews = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #94a3b8;
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
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
  color: #94a3b8;
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
  color: #94a3b8;
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
    height: 20px;
  }
  @media screen and (min-width: 768px) {
  }
`
