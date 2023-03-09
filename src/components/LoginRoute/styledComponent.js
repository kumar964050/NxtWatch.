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

  @media screen and (min-width: 992px) {
  }
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
  display: flex;
  justify-content: center;

  @media screen and (min-width: 992px) {
    position: absolute;
    width: 456px;
    height: 440px;
    left: 30%;
    top: 15%;
    bottom: 15%;
    right: 30%;
  }
`
export const UserLabel = styled.label`
  font-size: 13px;
  position: absolute;
  top: 23%;
  left: 5.89%;
  right: 5.89%;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => props.LabelColor};

  @media screen and (min-width: 992px) {
    top: 31%;
    left: 8%;
    right: 8%;
  }
`
export const AppLogo = styled.img`
  height: 25px;
  position: absolute;
  top: 5%;

  @media screen and (min-width: 992px) {
    position: absolute;
    height: 45px;
    top: 9%;
  }
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

  @media screen and (min-width: 992px) {
    font-size: 13px;
    top: 36%;
    border-radius: 2px;
    padding-left: 2.5%;
    left: 8%;
    right: 8%;
  }
`

export const PasswordLabel = styled(UserLabel)`
  position: absolute;
  top: 45%;
  left: 5.89%;
  right: 5.89%;
  @media screen and (min-width: 992px) {
    top: 49%;
    left: 8%;
    right: 8%;
  }
`

export const PasswordInput = styled(UserInput)`
  position: absolute;
  top: 52%;
  left: 5.89%;
  right: 5.89%;
  @media screen and (min-width: 992px) {
    font-size: 13px;
    top: 54%;
    border-radius: 2px;
    left: 8%;
    right: 8%;
  }
`
export const Checkbox = styled.input`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 66%;
  left: 4.89%;
  @media screen and (min-width: 992px) {
    top: 66%;
    height: 17px;
    width: 17px;
    left: 8%;
    right: 8%;
  }
`
export const CheckboxLabel = styled.label`
  font-size: 13px;
  position: absolute;
  top: 67%;
  left: 13.89%;
  right: 5.89%;
  font-family: 'Roboto';
  font-weight: 400;
  color: ${props => props.LabelColor};
  @media screen and (min-width: 992px) {
    top: 67%;
    left: 14%;
    font-weight: 400;
    font-size: 15px;
  }
`
export const FormButton = styled.button`
  height: 40px;
  position: absolute;
  top: 78%;
  left: 5.89%;
  right: 5.89%;
  border-radius: 6px;
  border: 0px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  background: #3b82f6;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 992px) {
    font-size: 15px;
    top: 78%;
    border-radius: 6px;
    left: 8%;
    right: 8%;
  }
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: ${props => props.ErrorMsg};
  position: absolute;
  top: 88%;
  font-size: 12px;
  left: 6%;
  @media screen and (min-width: 992px) {
    top: 86%;
    left: 8%;
    right: 8%;
  }
`
