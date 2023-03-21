import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 75px;
  background: ${props => props.HomeBackground};
`

export const HomeDetailContainer = styled.div`
  width: 100%;
`
export const HomeBanner = styled.div`
  height: 230px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 8%;
  background-image: url(${props => props.ImageUrl});
  background-size: cover;

  @media screen and (min-width: 576px) {
    padding-left: 5%;
    padding-top: 7%;
  }
  @media screen and (min-width: 768px) {
    padding-top: 4%;
  }
`
export const PremiumContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: space-between;
`

export const PremiumDetails = styled.div`
  height: 30px;
`
export const HomeLog = styled.img`
  height: 35px;
`
export const HomeDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #212121;
`
export const HomeButton = styled.button`
  height: 40px;
  width: 110px;
  background: transparent;
  border: 1px solid #231f20;
  color: #212121;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
`
export const CrossMarkCon = styled.div`
  height: 20px;
  width: 20px;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`

export const VideosUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const SearchContainer = styled.div`
  height: 75px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  background-color: ${props => props.SearchConBackground};
  @media screen and (min-width: 576px) {
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    padding-left: 5%;
  }
`
export const SearchInput = styled.input`
  color: ${props => props.InputColor};
  height: 35px;
  width: 80%;
  border: 1px solid ${props => props.Border};
  outline: none;
  padding-left: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  border-right: 0px;
  background-color: ${props => props.SearchColor};
  @media screen and (min-width: 576px) {
    width: 66%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchButton = styled.button`
  height: 35px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.Border};
  background-color: ${props => props.SearchButtonColor};
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 576px) {
    width: 15%;
  }
  @media screen and (min-width: 768px) {
    width: 12%;
  }
`
export const HomeVideosContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.HomeBackground};
  @media screen and (min-width: 768px) {
    margin-left: 20%;
  }
`
export const VideoDetailUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0px;
  background-color: ${props => props.VideoUl};
  @media screen and (min-width: 576px) {
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
export const LoaderSpinner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
