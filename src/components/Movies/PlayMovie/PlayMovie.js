import React, { Component } from 'react'
import { connect } from 'react-redux';
import './PlayMovie.css'

class PlayMovie extends Component {
  render() {
    return (
      <div className='player'>
        <iframe 
            title='movie'
            src={`https://drive.google.com/file/d/${this.props.info.id}/preview`} 
            width="100%" 
            height="100%"
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            >
        </iframe>
      </div>
    )
  }
}

function mapStateToProps(state){
    let { info } = state
    return {
        info
    }
}

export default connect(mapStateToProps)(PlayMovie)
