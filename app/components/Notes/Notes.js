import React from 'react'

const Notes = React.createClass({
  render: function() {
    return (
      <div>
        <p>NOTES </p>
        <p> {this.props.notes} </p>
        </div>
    )
  }
})

module.exports = Notes
