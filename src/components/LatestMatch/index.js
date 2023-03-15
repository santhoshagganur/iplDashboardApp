// Write your code here
import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails

    return (
      <div className="latest-match-container">
        <div>
          <p className="latest-match-name"> {competingTeam} </p>
          <p className="latest-match-date"> {date} </p>
          <p className="latest-match-venue"> {venue} </p>
          <p className="latest-match-result"> {result} </p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            className="oponent-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="match-details">
          <h1 className="first-innings-text"> First Innings </h1>
          <p className="first-innings-team"> {firstInnings} </p>
          <h1 className="first-innings-text"> Second Innings </h1>
          <p className="first-innings-team"> {secondInnings} </p>
          <h1 className="first-innings-text"> Man of the match </h1>
          <p className="first-innings-team"> {manOfTheMatch} </p>
          <h1 className="first-innings-text"> Umpires </h1>
          <p className="first-innings-team"> {umpires} </p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
