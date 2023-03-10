import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  align-items: center;
  background: ${props => props.HeaderBg};
`

export const HeaderImage = styled.img`
  height: 30px;
`

export const HeaderThemeContainer = styled.div`
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
`

export const HeaderTheme = styled.button`
  height: 30px;
  background: transparent;
  border: 0px;
  cursor: pointer;
  outline: none;
  color: ${props => props.IconsColor};
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 200px;

  height: 180px;

  margin-top: 0px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-right: 2%;
  &::after {
    height: 30px;
    width: 30px;
    background: yellow;
  }
`

export const HamburgerButton = styled(HeaderTheme)`
  height: 40px;
  color: ${props => props.IconsColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogoutButton = styled(HeaderTheme)`
  height: 40px;
  color: ${props => props.IconsColor};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ListItem = styled.li`
  padding-left: 30px;
  height: 45px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavNames = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 400;
`
export const ReactNavIcons = styled.div`
  height: 20px;
  color: #475569;
`
export const UnOrderedListCon = styled.div`
  height: 180px;
  width: 100%;
  position: absolute;
  top: 9%;
  display: flex;
  justify-content: flex-end;
`
export const AccountProfile = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
    height: 30px;
  }
`

export const LogoutMdButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`
