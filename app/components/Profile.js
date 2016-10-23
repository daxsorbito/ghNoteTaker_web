import React from 'react'
import Router from 'react-router'
import Repos from './Github/Repos'
import UserProfile from './Github/UserProfile'
import Notes  from './Notes/Notes'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDllhCt5rBItT1Rrd44SJtiZ9jmJGs0Q00",
  authDomain: "ghnotetaker-1abd0.firebaseio.com",
  databaseURL: "https://ghnotetaker-1abd0.firebaseio.com",
  storageBucket: "ghnotetaker-1abd0.firebaseio.com"
};
Firebase.initializeApp(config);

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      notes: [1,23],
      bio: {
        name: 'Dax Sorbito'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount: function() {
     this.ref = new Firebase.database().ref('/')
     const childRef = this.ref.child(this.props.params.username)
     this.bindAsArray(childRef, 'notes')
  },
  componentWillUnmount: function() {
     this.unbind('notes')
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
          User Profile Component --> {this.props.params.username}
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
          Repos Component
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes}/>
        </div>
      </div>
    )
  }
})

module.exports = Profile
