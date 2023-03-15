// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesBlog: [], isLoading: true}

  componentDidMount() {
    this.getResultsById()
  }

  getResultsById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const responseData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await responseData.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }

    this.setState({teamMatchesBlog: updatedData, isLoading: false})
  }

  renderResults = () => {
    const {teamMatchesBlog} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesBlog
    console.log(latestMatchDetails)

    return (
      <div className="team-matches-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-match-image"
        />
        <h1 className="latest-matches-text"> Latest Matches </h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.getMatchesCard()}
      </div>
    )
  }

  getMatchesCard = () => {
    const {teamMatchesBlog} = this.state
    const {recentMatches} = teamMatchesBlog

    return (
      <ul className="recent-matches-container">
        {recentMatches.map(each => (
          <MatchCard matchDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderResults()
        )}
      </div>
    )
  }
}

export default TeamMatches
