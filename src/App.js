import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import LoginRoute from './components/LoginRoute'
import ThemeContext from './context/ThemeContext'
import UserDetailsRoute from './components/UserDetailsRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SpecificVideoDetail from './components/SpecificVideoDetail'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    darkTheme: false,
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  savedVideoList = data => {
    const {savedVideos} = this.state
    const checkData = savedVideos.filter(each => each.id === data.id)
    if (checkData.length > 0) {
      this.setState({savedVideos})
    } else {
      this.setState({savedVideos: [...savedVideos, data]})
    }
  }

  render() {
    const {darkTheme, savedVideos} = this.state
    return (
      <ThemeContext.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
          savedVideos,
          savedVideoList: this.savedVideoList,
        }}
      >
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
          <UserDetailsRoute path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
