import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {Heading} from './styledComponent'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {darkTheme} = value

          const heading = darkTheme ? '#181818' : '#f9f9f9'

          return <Heading heading={heading}>Hello</Heading>
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
