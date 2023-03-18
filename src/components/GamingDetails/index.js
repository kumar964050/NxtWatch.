import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  GamingLi,
  GamingImage,
  GamingHeading,
  GamingCount,
} from './styledComponent'

const GamingDetails = props => {
  const {gamingDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {darkTheme} = value
        const videoDescription = darkTheme ? '#ffffff' : '#000000'
        return (
          <GamingLi>
            <Link to={`/videos/${id}`}>
              <GamingImage src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <GamingHeading GamingTitle={videoDescription}>
              {title}
            </GamingHeading>
            <GamingCount>{viewCount} Watching Worldwide</GamingCount>
          </GamingLi>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingDetails
