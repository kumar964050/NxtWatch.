import React from 'react'

const ThemeContext = React.createContext({
  darkTheme: false,
  changeTheme: () => {},
  savedVideos: [],
  savedVideoList: () => {},
})

export default ThemeContext
