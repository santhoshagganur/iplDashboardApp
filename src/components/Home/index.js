// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getAllTeams()
  }

  getAllTeams = async () => {
    const allTeams = await fetch('https://apis.ccbp.in/ipl')
    const response = await allTeams.json()
    const updatedData = response.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    console.log(updatedData)

    this.setState({teamsList: updatedData})
  }

  render() {
    const {teamsList} = this.state

    return (
      <div className="app-home-bg-container">
        <div className="app-home-title">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="app-home-logo"
          />
          <h1 className="app-home-title-name"> IPL Dashboard </h1>
        </div>
        <ul className="app-home-teams-container">
          {teamsList.map(each => (
            <TeamCard eachTeam={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
