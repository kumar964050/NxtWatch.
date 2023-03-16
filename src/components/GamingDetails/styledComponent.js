import styled from 'styled-components'

export const GamingLi = styled.li`
  margin-right: 11px;
  padding-left: 10px;
  margin-bottom: 22px;
  width: 46%;
  @media screen and (min-width: 576px) {
    width: 31%;
  }
  @media screen and (min-width: 576px) {
    width: 23%;
  }
`

export const GamingImage = styled.img`
  height: 165px;
  @media screen and (min-width: 576px) {
    width: 105%;
    height: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 330px;
  }
`
export const GamingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const GamingCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
