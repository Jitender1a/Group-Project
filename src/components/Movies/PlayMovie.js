import React, { Component } from 'react'
import { connect } from 'react-redux';

class PlayMovie extends Component {
  render() {
    return (
      <div>
        <iframe 
            title='movie'
            src={`https://drive.google.com/file/d/${this.props.info.id}/preview`} 
            width="640" 
            height="480"
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
