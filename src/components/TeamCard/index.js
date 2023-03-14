// Write your code here
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl} = eachTeam

  return (
    <li className="app-team-card-container">
      <img src={teamImageUrl} alt={name} className="team-card-image" />
      <h1 className="team-card-heading"> {name} </h1>
    </li>
  )
}

export default TeamCard
