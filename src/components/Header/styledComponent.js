import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  padding-left: 5%;
  align-items: center;
`

export const HeaderImage = styled.img`
  height: 30px;
`

export const HeaderThemeContainer = styled.div`
  height: 40px;
`

export const HeaderTheme = styled.button`
  height: 30px;
  background: transparent;
  border: 0px;
  cursor: pointer;
  outline: none;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 200px;
  margin-top: 71px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-right: 2%;
`

export const HamburgerButton = styled(HeaderTheme)`
  height: 40px;
`
export const LogoutButton = styled(HeaderTheme)`
  height: 40px;
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
`
