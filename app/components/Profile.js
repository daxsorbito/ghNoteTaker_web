import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes  from './Notes/Notes'

const Profile = React.createClass({
  getInitialState: function() {
    return {
      notes: [1,23],
      bio: {
        name: 'Dax Sorbito'
      },
      repos: ['a', 'b', 'c']
    }
  },
  render: function() {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
          User Profile Component --> {this.props.params.username}
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}/>
          Repos Component
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}/>
          Notes Component
        </div>
      </div>
    )
  }
})

module.exports = Profile
