import styled from 'styled-components'

export const GamingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  background-color: ${props => props.GamingBackground};
`

export const NoSavedVideosN = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 20%;
  }
`
export const SavedVideosHeadingN = styled.h1`
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

export const SavedVideosParagraphN = styled.p`
  font-family: 'Roboto';
  text-align: center;
  font-size: 15px;
  margin-top: 15px;
  width: 80%;
  color: #64748b;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const SavedImageN = styled.img`
  width: 95%;
  margin-bottom: 20px;
  height: 275px;
  @media screen and (min-width: 576px) {
    width: 65%;
  }
  @media screen and (min-width: 768px) {
    width: 41%;
    height: 400px;
  }
`
