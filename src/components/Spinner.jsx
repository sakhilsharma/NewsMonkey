import React, { Component } from 'react'
import loading from'../assets/spinner.gif'

export default class Spinner extends Component {

  render() {
    return (
      <div className="text-center">
        <img src={loading} alt="loading..." style={{height:"45px" , width:"45px"}}></img>
      </div>
    )
  }
}
