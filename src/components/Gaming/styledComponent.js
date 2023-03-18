import styled from 'styled-components'

export const GamingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  background-color: ${props => props.GamingBackground};
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
  color: ${props => props.GamingName};
  @media screen and (min-width: 768px) {
    font-size: 33px;
  }
`
export const GamingUl = styled.ul`
  list-style-type: none;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 2%;
    width: 102%;
  }
  @media screen and (min-width: 768px) {
    margin-left: 20%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding-left: 4%;
    padding-right: 4%;
  }
`
