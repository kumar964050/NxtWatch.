import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  min-height: 100vh;
  background: ${props => props.TrendingBackground};
`

export const FireContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  background: grey;
  padding-left: 5%;
  background: ${props => props.FireBackground};
  @media screen and (min-width: 768px) {
    margin-left: 20%;
    height: 130px;
    width: 80%;
  }
`
export const FireImage = styled.div`
  height: 45px;
  width: 45px;
  background: #b2b2a2;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 15px;
  background: ${props => props.FireImageBackground};
  @media screen and (min-width: 768px) {
    height: 75px;
    width: 75px;
  }
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: ${props => props.TrendingHeading};
  @media screen and (min-width: 768px) {
    font-size: 33px;
  }
`
export const TrendingUl = styled.ul`
  list-style-type: none;
  padding-top: 5%;
  padding-left: 0px;
  @media screen and (min-width: 576px) {
    padding-left: 3%;
    padding-right: 3%;
  }
  @media screen and (min-width: 768px) {
    margin-left: 20%;
    width: 80%;
  }
`
export const NoSavedVideos = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 20%;
    width: 80%;
  }
`
export const SavedVideosHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  font-size: 16px;
  margin-top: 20px;
  color: ${props => props.SavedColor};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const SavedVideosParagraph = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
  color: ${props => props.SavedColor};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SavedImage = styled.img`
  width: 80%;
  height: 40%;
  @media screen and (min-width: 576px) {
    width: 54%;
  }
  @media screen and (min-width: 768px) {
    width: 34%;
  }
`
