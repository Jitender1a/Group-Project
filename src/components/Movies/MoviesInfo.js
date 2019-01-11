import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import TMDB_api_key from '../../TMDB_api_key'
import { Link } from 'react-router-dom'

class MoviesInfo extends Component {
    constructor(){
        super()

        this.state = {
            movieInfo: {}
        }
    }

    componentDidMount(){
        Axios.get(`https://api.themoviedb.org/3/search/movie?year=${this.props.info.year}&include_adult=false&page=1&query=${this.props.info.title}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
            this.setState({
                movieInfo: res.data.results[0]
            })
        })
    }

  render() {
      let { movieInfo } = this.state
    return (
      <div>
        { movieInfo.title }<br/>
        { movieInfo.overview }
        <Link to='/PlayMovie'>
            <img src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt="" width='150px' height='250px'/>
        </Link>
        <img src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt="" width='80%' height='800px'/>
        Rating { movieInfo.vote_average }
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

export default connect(mapStateToProps)(MoviesInfo)
