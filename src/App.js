import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: true,
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  render() {
    const {darkTheme} = this.state
    return (
      <ThemeContext.Provider value={{darkTheme, changeTheme: this.changeTheme}}>
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
