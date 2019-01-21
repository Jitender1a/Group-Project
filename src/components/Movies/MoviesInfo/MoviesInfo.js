import React, { Component } from 'react'
import { connect } from 'react-redux'
import Axios from 'axios';
import TMDB_api_key from '../../../TMDB_api_key'
import { Link } from 'react-router-dom'
import './MoviesInfo.css'
import { getInfo } from '../../../ducks/reducer'


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
     <div className='moviesContainer'>
        <div className='backdrop'>
            <img src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt="" width='100%' height='100%'/>
            
        </div>
        {/* <img className='background' src='https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/rN0W64K4ipau8gxv/dark-gray-background-soft-fifteen-shades-of-grey-smooth-background-with-the-addition-of-a-bit-of-noise_bvu2c-5qtg_thumbnail-full01.png' alt=""/> */}
        <div className='infoContainer'>
            <div className='posterContainer'>
            {
                this.props.isAuthenticated ?
                <Link to='/PlayMovie'> 
                    <img className='poster' src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt="" />
                    {/* <img className='playButton' src='https://www.clipartmax.com/png/middle/201-2017485_movie-player-play-button-comments-round-play-button-png.png' alt=""/> */}
                </Link>
                :
                <Link to='/Login'> 
                    <img className='poster' src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`} alt=""/>
                    {/* <img className='playButton' src='https://www.clipartmax.com/png/middle/201-2017485_movie-player-play-button-comments-round-play-button-png.png' alt=""/> */}
                </Link>
            }
            </div>

            <div className='textContainer'>
                <div className='movieTitle'>
                    {movieInfo.title}<br/>
                </div>

                <div className='rating'>
                    <div className='imdb'>IMDb</div> 
                    { movieInfo.vote_average }
                    {/* <img width = "55px" height = "34px" src='http://pluspng.com/img-png/png-hd-icons-1080-1080p-full-hd-icon-icon-512.png' alt=""/> */}
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
   let { info, isAuthenticated } = state
   return {
       info,
       isAuthenticated
   }
}

export default connect(mapStateToProps, { getInfo })(MoviesInfo)