import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import TMDB_api_key from '../../../TMDB_api_key'
import { Link } from 'react-router-dom'
import './MoviesInfo.css'


class MoviesInfo extends Component {
   constructor(){
       super()

       this.state = {
           movieInfo: {}
       }
   }

   componentDidMount(){
       console.log('info', this.props.info)
       Axios.get(`https://api.themoviedb.org/3/search/movie?year=${this.props.info.year}&include_adult=false&page=1&query=${this.props.info.title}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
           this.setState({
               movieInfo: res.data.results[0]
           })
       })
   }

 render() {
     console.log(this.state.movieInfo)
     let { movieInfo } = this.state
   return (
     <div className='moviesContainer'>
        <div className='backdrop'>
            <img src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt="" width='100%' height='100%'/>
            
        </div>

        <div className='infoContainer'>
            <div className='posterContainer'>
                <Link to='/PlayMovie'> 
                    <img className='poster' src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt="" width='82%' height='auto' />
                    <img className='playButton' src='https://www.clipartmax.com/png/middle/201-2017485_movie-player-play-button-comments-round-play-button-png.png' alt=""/>
                </Link>
            </div>

            <div className='textContainer'>
                <div className='movieTitle'>
                    {movieInfo.title}<br/>
                </div>

                <div className='rating'>
                    <div className='imdb'>IMDb</div> 
                    { movieInfo.vote_average }
                    {/* <img width = "55px" height = "34px" src='https://cdn.freebiesupply.com/logos/large/2x/dolby-digital-5-1-logo-png-transparent.png' alt=""/> */}
                </div>

                <div className='description'>
                    { movieInfo.overview }
                </div>
            </div>
        </div>
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