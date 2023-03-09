import styled from 'styled-components'

export const Heading = styled.h1`
  color: ${props => props.heading};
`

export const Paragraph = styled.p`
  color: red;
`
export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background: ${props => props.loginBackground};
`

export const Form = styled.form`
  position: absolute;
  top: 20%;
  background: ${props => props.FormBackground};
  bottom: 20%;
  left: 8.89%;
  right: 8.89%;
  border-radius: 8px;
  box-shadow: 0px 0px 5px;
`
export const UserLabel = styled.label`
  font-size: 13px;
  position: absolute;
  top: 23%;
  left: 5.89%;
  right: 5.89%;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.LabelColor};
`
export const AppLogo = styled.img`
  height: 25px;
  position: absolute;
  top: 5%;
  left: 30%;
`
export const UserInput = styled.input`
  height: 40px;
  position: absolute;
  top: 29%;
  left: 5.89%;
  right: 5.89%;
  border-radius: 3px;
  background: transparent;
  border: 1px solid ${props => props.InputBorder};
  font-family: 'Roboto';
  font-weight: 400;
  padding-left: 4%;
  outline: none;
  color: ${props => props.InputColor};
`

export const PasswordLabel = styled(UserLabel)`
  position: absolute;
  top: 45%;
  left: 5.89%;
  right: 5.89%;
`

export const PasswordInput = styled(UserInput)`
  position: absolute;
  top: 52%;
  left: 5.89%;
  right: 5.89%;
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 66%;
  left: 4.89%;
`
export const CheckboxLabel = styled.label`
  font-size: 13px;
  position: absolute;
  top: 67%;
  left: 13.89%;
  right: 5.89%;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.LabelColor};
`
export const FormButton = styled.button`
  height: 40px;
  position: absolute;
  top: 78%;
  left: 5.89%;
  right: 5.89%;
  border-radius: 12px;
  border: 0px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background: #3b82f6;
  color: #ffffff;
  cursor: pointer;
  outline: none;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
`
