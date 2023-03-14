// Write your code here
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, result, competingTeam, matchStatus} = matchDetails

  const matchStatusClassname = () => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lose'
  }

  return (
    <li className="app-match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing-team${competingTeam}`}
        className="match-card-image"
      />
      <h1 className="match-card-heading"> {competingTeam} </h1>
      <p className="match-card-result"> {result} </p>
      <p className="match-won"> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
