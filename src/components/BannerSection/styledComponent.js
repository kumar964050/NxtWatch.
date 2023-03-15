import styled from 'styled-components'

export const UnorderedListB = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    list-style-type: none;
    padding-left: 0px;
  }
`

export const ListItemB = styled.li`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15%;
  }
`
export const NavNamesB = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const ReactNavIconsB = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-right: 15%;
  }
`
export const UnOrderedListConB = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 20%;
    height: 90vh;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
  }
`
export const FooterHeading = styled.h1`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-size: 16px;
  }
`
export const FooterImageCon = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const FooterImages = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 25px;
    width: 25px;
    margin-right: 20px;
  }
`
export const FooterDescription = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 600;
  }
`
export const FooterContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding-left: 15%;
    height: 175px;
  }
`
