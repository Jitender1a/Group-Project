import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import './PlayMovie.css'

class PlayMovie extends Component {
  render() {
    console.log(this.props.info)
    return this.props.isAuthenticated ?
      <div className='player'>
        <iframe 
            title='movie'
            src={`https://drive.google.com/file/d/${this.props.info.id}/preview`} 
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            >
        </iframe>
      </div>
      :
      <Redirect to='/Login'/>
  }
}

function mapStateToProps(state){
    let { info, isAuthenticated } = state
    return {
        info,
        isAuthenticated
    }
}

export default connect(mapStateToProps)(PlayMovie)
