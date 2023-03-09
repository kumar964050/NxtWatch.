import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  Form,
  AppLogo,
  UserLabel,
  UserInput,
  PasswordLabel,
  PasswordInput,
  Checkbox,
  CheckboxLabel,
  FormButton,
  ErrorMsg,
} from './styledComponent'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  submitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    console.log(data)
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeCheckBox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showPassword,
      showErrorMsg,
      errorMsg,
    } = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value
          const inputType = showPassword ? 'text' : 'password'
          const background = darkTheme ? '#181818' : '#f9f9f9'
          const appLogo = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const formBackground = darkTheme ? '#0f0f0f' : '#f8fafc'
          const labelColor = darkTheme ? '#ffffff' : '#0f0f0f'
          const inputBorder = darkTheme ? '#475569' : '#94a3b8'
          const inputColor = darkTheme ? '#ffffff' : '#0f0f0f'

          return (
            <LoginContainer loginBackground={background}>
              <Form
                FormBackground={formBackground}
                onSubmit={this.submitDetails}
              >
                <AppLogo src={appLogo} alt="Logo" />
                <UserLabel LabelColor={labelColor} htmlFor="userName">
                  USERNAME
                </UserLabel>
                <UserInput
                  InputColor={inputColor}
                  InputBorder={inputBorder}
                  type="text"
                  id="userName"
                  placeholder="Username"
                  value={username}
                  onChange={this.changeUsername}
                />
                <PasswordLabel LabelColor={labelColor} htmlFor="password">
                  PASSWORD
                </PasswordLabel>
                <PasswordInput
                  InputColor={inputColor}
                  InputBorder={inputBorder}
                  type={inputType}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.changePassword}
                />
                <Checkbox
                  type="checkbox"
                  id="checkbox"
                  onChange={this.changeCheckBox}
                  value={showPassword}
                />
                <CheckboxLabel LabelColor={labelColor} htmlFor="checkbox">
                  Show Password
                </CheckboxLabel>
                <FormButton type="submit">Login</FormButton>
                {showErrorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
              </Form>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
