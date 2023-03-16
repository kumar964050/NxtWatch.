import {Link} from 'react-router-dom'
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
    <Link to={`/videos/${id}`}>
      <GamingLi>
        <GamingImage src={thumbnailUrl} alt="video thumbnail" />
        <GamingHeading>{title}</GamingHeading>
        <GamingCount>{viewCount} Watching Worldwide</GamingCount>
      </GamingLi>
    </Link>
  )
}
export default GamingDetails
