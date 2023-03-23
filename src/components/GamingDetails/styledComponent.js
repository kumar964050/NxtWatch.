import styled from 'styled-components'

export const GamingLi = styled.li`
  margin-right: 11px;
  padding-left: 10px;
  margin-bottom: 22px;
  width: 46%;
  @media screen and (min-width: 576px) {
    width: 31%;
  }
  @media screen and (min-width: 768px) {
  }
`

export const GamingImage = styled.img`
  height: 74%;
  width: 100%;
  @media screen and (min-width: 576px) {
  }
  @media screen and (min-width: 768px) {
  }
`
export const GamingHeading = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.GamingTitle};
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const GamingCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #94a3b8;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
