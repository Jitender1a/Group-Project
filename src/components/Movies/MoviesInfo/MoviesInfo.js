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
     <div className='MoviesInfo'>
        <img src={`https://image.tmdb.org/t/p/original${movieInfo.backdrop_path}`} alt="" width='100%' height='600px' />

        <div className='movieTitle'>
        { movieInfo.title }<br/>
        </div>


        <Link to='/PlayMovie'> <img className='MoviePlay' src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}/></Link>


        <div className='description'>
        { movieInfo.overview }
        </div>

        <div className='rating'>
        Rating { movieInfo.vote_average }
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