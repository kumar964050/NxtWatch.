import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import ThemeContext from './context/ThemeContext'
import UserDetailsRoute from './components/UserDetailsRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
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
          <UserDetailsRoute exact path="/" component={Home} />
          <UserDetailsRoute exact path="/trending" component={Trending} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
