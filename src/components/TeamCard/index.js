// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="app-team-card-container">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <h1 className="team-card-heading"> {name} </h1>
      </li>
    </Link>
  )
}

export default TeamCard
