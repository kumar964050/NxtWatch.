import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  background: ${props => props.HeaderBg};
  position: fixed;
  width: 100%;
`

export const HeaderImage = styled.img`
  height: 30px;
`

export const HeaderThemeContainer = styled.div`
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 160px;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
  width: 100%;

  height: 180px;

  margin-top: 50%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: ${props => props.Ullist};
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
  height: 45px;
  display: flex;
  align-items: center;
  background-color: ${props => props.Background};
`
export const NavNames = styled.p`
  font-family: 'Roboto';
  color: #475569;
  font-weight: 400;
  color: ${props => props.NavElement};
  font-weight: ${props => props.FontWeight};
`
export const ReactNavIcons = styled.div`
  height: 20px;
  color: #475569;
  margin-right: 20px;
  margin-left: 37%;
  color: ${props => props.NavIcons};
`
export const UnOrderedListCon = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  background: #0f0f0f;
  flex-direction: column;
  align-items: flex-end;
  background: ${props => props.Ullist};
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
    cursor: pointer;
    outline: none;
  }
`
export const PopupDiv = styled.div`
  background: #ffffff;
  width: 270px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.popupBackground};
  @media screen and (min-width: 768px) {
    width: 330px;
  }
`

export const LogoutDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 32px;
  margin-top: 34px;
  color: ${props => props.IconsColor};
`
export const CancelButton = styled.button`
  height: 40px;
  width: 75px;
  border-radius: 3px;
  border: 1px solid #7e858e;
  color: #7e858e;
  background: transparent;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 85px;
  }
`

export const ConfirmButton = styled.button`
  height: 40px;
  width: 75px;
  border: 0px;
  background: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 85px;
  }
`
export const LogoutButtons = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
`
export const CrossMark = styled.button`
  color: ${props => props.NavElement}
  border: 0px;
  background-color: transparent;
  transform: rotate(45deg);
  padding-top: 10px;
  padding-right: 10px;
  font-size: 27px;
  cursor: pointer;
  outline: none;
  border: 0px;
`
