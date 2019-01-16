import React, { Component } from 'react'
import Axios from 'axios';
import TMDB_api_key from '../../../TMDB_api_key'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getInfo } from '../../../ducks/reducer'
import './Search.css'

class Search extends Component {
    constructor(){
        super()

        this.state = {
            poster: '',
            backDrop: '',
            title: '',
            rating: '',
            overview: '',
            posters: []
        }
    }

    componentDidMount(){
        console.log(this.props.posters)
        let allPosters = this.props.posters.map(poster => {
            return poster.poster
        })
        this.setState({
            posters: allPosters
        })
        let query = this.props.search.replace(/ /g, '%20')
        console.log(query)
        Axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${query}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
            console.log(res.data.results[0])
            if(!res.data.results[0]){
                this.setState({
                    poster: ''
                })
            } else {
                this.setState({
                    poster: `https://image.tmdb.org/t/p/original${res.data.results[0].poster_path}`,
                    backDrop: `https://image.tmdb.org/t/p/original${res.data.results[0].backdrop_path}`,
                    title: res.data.results[0].title,
                    rating: res.data.results[0].vote_average,
                    overview: res.data.results[0].overview
                })
            }
        })
    }


    render() {
        console.log(this.state.posters)
        let index = this.state.posters.indexOf(this.state.poster)
        if(index === -1){
            return (
            <div>
               <div className='searchS'>
               <div className='paddingN'></div>
                    Movie Not Available
               </div>
               <div className='exact'>
                   Please Make Sure Spelling Is Exact
               </div>
               <div className='LinkDiv'>
               <Link className='linkHome'to='/DriveMovies'>Return Home</Link>
               </div>
            </div>
            )
        } else { 
            console.log(this.props.posters[index])
            return (
                <div className='moviesContainer'>
                <div className='backdrop'>
                    <img src={this.state.backDrop} alt="" width='100%' height='100%'/>
                    
                </div>
                {/* <img className='background' src='https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/rN0W64K4ipau8gxv/dark-gray-background-soft-fifteen-shades-of-grey-smooth-background-with-the-addition-of-a-bit-of-noise_bvu2c-5qtg_thumbnail-full01.png' alt=""/> */}
                <div className='infoContainer'>
                    <div className='posterContainer'>
                    {
                        this.props.isAuthenticated ?
                        <Link to='/PlayMovie'> 
                            <img className='poster' src={this.state.poster} alt=""/>
                            {/* <img className='playButton' src='https://www.clipartmax.com/png/middle/201-2017485_movie-player-play-button-comments-round-play-button-png.png' alt=""/> */}
                        </Link>
                        :
                        <Link to='/Login'> 
                            <img className='poster' src={this.state.poster} alt=""/>
                            {/* <img className='playButton' src='https://www.clipartmax.com/png/middle/201-2017485_movie-player-play-button-comments-round-play-button-png.png' alt=""/> */}
                        </Link>
                    }
                    </div>
        
                    <div className='textContainer'>
                        <div className='movieTitle'>
                            {this.state.title}<br/>
                        </div>
        
                        <div className='rating'>
                            <div className='imdb'>IMDb</div> 
                            { this.state.rating }
                            {/* <img width = "55px" height = "34px" src='https://cdn.freebiesupply.com/logos/large/2x/dolby-digital-5-1-logo-png-transparent.png' alt=""/> */}
                        </div>
        
                        <div className='description'>
                            { this.state.overview }
                        </div>
                    </div>
                </div>
             </div>
            )
        }
    }
}

function mapStateToProps(state){
    let { search, posters } = state
    return {
        search,
        posters
    }
}

export default connect(mapStateToProps, { getInfo })(Search)
