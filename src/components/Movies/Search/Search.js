import React, { Component } from 'react'
import Axios from 'axios';
import TMDB_api_key from '../../../TMDB_api_key'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getInfo } from '../../../ducks/reducer'

class Search extends Component {
    constructor(){
        super()

        this.state = {
            poster: '',
            posters: []
        }
    }

    componentDidMount(){
        let allPosters = this.props.posters.map(poster => {
            return poster.poster
        })
        this.setState({
            posters: allPosters
        })
        let query = this.props.search.replace(/ /g, '%20')
        Axios.get(`https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=${query}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
            this.setState({
                poster: `https://image.tmdb.org/t/p/original${res.data.results[0].poster_path}`
            })
        })
    }


  render() {
      let index = this.state.posters.indexOf(this.state.poster)
      if(index === -1){
        return (
            <div>
                Movie Not Available
            </div>
        )
      } else { 
          console.log(this.props.posters[index])
          return (
            <div>
                <Link to='/MovieInfo'>
                    <img src={this.state.poster} alt="" width='400px' height='600px' onClick={
                        () => {this.props.getInfo({
                            year: this.props.posters[index].year,
                            title: this.props.posters[index].title,
                            id: this.props.posters[index].id
                        })}
                    }/>
                </Link>
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
