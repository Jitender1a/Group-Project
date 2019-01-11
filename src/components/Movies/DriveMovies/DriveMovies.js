
import React, { Component } from 'react'
import Axios from 'axios' 
import TMDB_api_key from '../../../TMDB_api_key'
import { connect } from 'react-redux';
import { getInfo, search, getPosters } from '../../../ducks/reducer'
import { Link } from 'react-router-dom'
import './DriveMovies.css'

class Movies extends Component {
  constructor(){
    super()

    this.state = {
        moviePosters: [],
        years: [],
        titles: [],
        movies: [],
        popularity: [],
        releaseDate: [],
        rating: [],
        search: ''    
      }
  }

    
      componentDidMount(){
        Axios.get('/files').then(res => {
          this.setState({
            movies: res.data,
          })
          let years = res.data.map(movie => {
            let noUnderScores = movie.name.replace(/_/g, ' ')
            let noFileFormat = noUnderScores.replace(/.mp4|.mkv/g, '')
            let year = noFileFormat.replace(/[^0-9]/ig, '')
            let years = []
            years.push(year)
            return years
          })
          let allYears = years.map(year => {
            return year[0] 
          })
          this.setState({
            years: allYears
          })

          let titles = res.data.map(movie => {
            let noUnderScores = movie.name.replace(/_/g, ' ')
            let noFileFormat = noUnderScores.replace(/.mp4|.mkv/g, '')
            let queryString = noFileFormat.replace(/[0-9]|[()]/ig, '')
            let noSpaces = queryString.replace(/ /g, '%20')
            let titles = []
            titles.push(noSpaces)
            return titles
          })
          let allTitles = titles.map(title => {
            return title[0]
          })
          this.setState({
            titles: allTitles
          })


          
          let posters = res.data.map(movie => {
            let id = movie.id
            let noUnderScores = movie.name.replace(/_/g, ' ')
            let noFileFormat = noUnderScores.replace(/.mp4|.mkv/g, '')
            // console.log('1', noFileFormat)
            let queryString = noFileFormat.replace(/\(|\)/ig, '')
            // console.log('2', queryString)
            let noDate = queryString.replace(/2018|2017|2016|2015|2014|2013|2012|2011|2010|2009|2008|2007|2006|2005|2004|2003|2002|2001|2000|1999|1994|1977/g, '')
            // console.log('3', noDate)
            let noSpaces = noDate.replace(/ /g, '%20')
            // console.log('4', noSpaces)
            let year = noFileFormat.replace(/[^0-9]/ig, '')
            return Axios.get(`https://api.themoviedb.org/3/search/movie?year=${year}&include_adult=false&page=1&query=${noSpaces}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
                let moviePosters = []
                moviePosters.push({
                  poster: `https://image.tmdb.org/t/p/original${res.data.results[0].poster_path}`,
                  popularity: res.data.results[0].popularity,
                  releaseDate: res.data.results[0].release_date,
                  rating: res.data.results[0].vote_average,
                  year: year,
                  title: noSpaces,
                  id
                })
                return moviePosters
              })
          })
          Promise.all(posters).then(res => {
            let posters = res.map(data => {
              return {
                poster: data[0].poster,
                popularity: data[0].popularity,
                releaseDate: data[0].releaseDate,
                rating: data[0].rating,
                year: data[0].year,
                title: data[0].title,
                id: data[0].id
              }
            })
            this.setState({
              moviePosters: posters
            })
            this.props.getPosters(this.state.moviePosters)
          })
        })
      }

      comparePopularity = (a,b) => {
        if(a.popularity > b.popularity){
              return -1
            }
            if(a.popularity < b.popularity){
              return 1
            }
            return 0
      }

      compareRating = (a,b) => {
        if(a.rating > b.rating){
              return -1
            }
            if(a.rating < b.rating){
              return 1
            }
            return 0
      }

      compareReleaseDate = (a,b) => {
        if(a.releaseDate > b.releaseDate){
              return -1
            }
            if(a.releaseDate < b.releaseDate){
              return 1
            }
            return 0
      }

      compareAlphabetically = (a,b) => {
        if(a.title < b.title){
              return -1
            }
            if(a.title > b.title){
              return 1
            }
            return 0
      }

      handleChange = (val, key) => {
        let obj = {}
        obj[key] = val
        this.setState(obj)
      }



  render() {
    console.log(this.state.moviePosters)
    return (
      <div className='drivemovies'>
        <div className='toolbar-container'>
          <div className='button-container'>
            <button
            onClick={() => (this.setState({
              moviePosters: [ ...this.state.moviePosters ].sort(this.compareAlphabetically)
            }))}
            >
              A-Z
            </button>
            
            <button
            onClick={() => (this.setState({
              moviePosters: [ ...this.state.moviePosters ].sort(this.comparePopularity)
            }))}
            >
              Popular
            </button>

            <button
            onClick={() => (this.setState({
              moviePosters: [ ...this.state.moviePosters ].sort(this.compareRating)
            }))}
            >
              Top Rated
            </button>
            
            <button
            onClick={() => (this.setState({
              moviePosters: [ ...this.state.moviePosters ].sort(this.compareReleaseDate)
            }))}
            >
              Release Date
            </button>
          </div> 
          <div className='searchbar-container'>
            <input 
            onChange={(e) => {this.handleChange(e.target.value, 'search')}}
            value={this.state.search}
            />

            <Link to='/Search'>
              <button onClick={() => this.props.search(this.state.search)}>
                Search
              </button>
            </Link>
          </div>
        </div>
        
          <div className='poster-container'>
            { 
                this.state.moviePosters.map((poster, i) => {
                return (
                  <div key={i}>
                  <Link to='/MovieInfo'>
                    <img src={poster.poster} alt="" width='188px' height='279px' onClick={() => {
                      this.props.getInfo({
                        year: poster.year,
                        title: poster.title,
                        id: poster.id
                      })
                    }}/>
                  </Link>
                </div>
              )
            })
            }
        </div>
      </div>
    )
  }
}

export default connect(null, { getInfo, search, getPosters})(Movies)