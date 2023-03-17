import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import ThemeContext from './context/ThemeContext'
import UserDetailsRoute from './components/UserDetailsRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SpecificVideoDetail from './components/SpecificVideoDetail'
import SavedVideos from './components/SavedVideos'
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
          <UserDetailsRoute exact path="/gaming" component={Gaming} />
          <UserDetailsRoute
            exact
            path="/videos/:id"
            component={SpecificVideoDetail}
          />
          <UserDetailsRoute
            exact
            path="/saved-videos"
            component={SavedVideos}
          />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
