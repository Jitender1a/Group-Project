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
            posters: [],
            request: '',
            disabled: false
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
            if(!res.data.results[0]){
                this.setState({
                    poster: ''
                })
            } else {
                let index = allPosters.indexOf(`https://image.tmdb.org/t/p/original${res.data.results[0].poster_path}`)
                if(index !== -1) {
                    let {id, title, year} = this.props.posters[index]
                    this.props.getInfo({
                        year: year,
                        title: title,
                        id: id,
                    })
                }
                this.setState({
                    poster: `https://image.tmdb.org/t/p/original${res.data.results[0].poster_path}`,
                    backDrop: `https://image.tmdb.org/t/p/original${res.data.results[0].backdrop_path}`,
                    title: res.data.results[0].title,
                    rating: res.data.results[0].vote_average,
                    overview: res.data.results[0].overview,
                })
            }
        })
    }

    handleClick = () => {
        Axios.post('/email', {text: this.props.search}).then(res => {
            if(res.status === 200){
                this.setState({
                    request: 'Request Sent!',
                    disabled: true
                })
            }
        })
    }


    render() {
        let index = this.state.posters.indexOf(this.state.poster)
        if(index === -1){
            return (
                <div className='search'>
                    <div className='title'>
                        Movie Not Available :(
                    </div>
                    <div className='exact'>
                        (Spelling Must Be An Exact Match)
                    </div>
                    <div className='sideBySide'>
                        <div className='returnHome'>
                            <Link className='linkHome'to='/DriveMovies'>Return Home</Link>
                        </div>
                        <div id='request'
                            disabled={this.state.disabled}
                            onClick={this.handleClick}>
                            <p>
                            Request Movie
                            </p>
                        </div>
                    </div>
                    <div className='requestText'>
                        {this.state.request}
                    </div>
                </div>
            )
        } else { 
            return (
                <div className='moviesContainer'>
                <div className='backdrop'>
                    <img src={this.state.backDrop} alt="" width='100%' height='100%'/>
                    
                </div>
                <div className='infoContainer'>
                    <div className='posterContainer'>
                    {
                        this.props.isAuthenticated ?
                        <Link to='/PlayMovie'> 
                            <img className='poster' src={this.state.poster} alt=""/>
                            }}/>
                        </Link>
                        :
                        <Link to='/Login'> 
                            <img className='poster' src={this.state.poster} alt=""/>
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
    let { search, posters, info } = state
    return {
        search,
        posters,
        info
    }
}

export default connect(mapStateToProps, { getInfo })(Search)
