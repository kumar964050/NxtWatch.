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
    <GamingLi>
      <Link to={`/videos/${id}`}>
        <GamingImage src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <GamingHeading>{title}</GamingHeading>
      <GamingCount>{viewCount} Watching Worldwide</GamingCount>
    </GamingLi>
  )
}
export default GamingDetails
