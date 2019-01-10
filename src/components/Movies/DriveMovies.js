import React, { Component } from 'react'
import Axios from 'axios' 
import TMDB_api_key from '../../TMDB_api_key'
import { connect } from 'react-redux';
import { getInfo } from '../../ducks/reducer'
import { Link } from 'react-router-dom'

class Movies extends Component {
  constructor(){
    super()

    this.state = {
        moviePosters: [],
        years: [],
        titles: [],
        movies: [],
        search: ''
      }
  }

    
      componentDidMount(){
        Axios.get('/files').then(res => {
          console.log(res.data)
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
            let noSpaces = queryString.replace(/\s/g, '%20')
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
            let noUnderScores = movie.name.replace(/_/g, ' ')
            let noFileFormat = noUnderScores.replace(/.mp4|.mkv/g, '')
            let queryString = noFileFormat.replace(/[0-9]|[()]/ig, '')
            let noSpaces = queryString.replace(/\s/g, '%20')
            let year = noFileFormat.replace(/[^0-9]/ig, '')
            return Axios.get(`https://api.themoviedb.org/3/search/movie?year=${year}&include_adult=false&page=1&query=${noSpaces}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
                let moviePosters = []
                moviePosters.push(`https://image.tmdb.org/t/p/original${res.data.results[0].poster_path}`)
                return moviePosters
              })
          })
          Promise.all(posters).then(res => {
            let urls = res.map(url => {
              return url[0]
            })
            this.setState({
              moviePosters: urls
            })
          })
        })
      }


  render() {
    console.log(this.state.titles)
    return (
        this.state.moviePosters.map((poster, i) => {
          return (
            <div key={i}>
            <Link to='/MovieInfo'>
              <img src={poster} alt="" width='400px' height='600px' onClick={() => {
                this.props.getInfo({
                  year: this.state.years[i],
                  title: this.state.titles[i],
                  id: this.state.movies[i].id
                })
              }}/>
            </Link>
            </div>
          )
        })
    //   this.state.movies.map((movie, i) => {
    //     return (
    //       <div key={i}>
    //         <iframe 
    //         title='movie'
    //         src={`https://drive.google.com/file/d/${movie.id}/preview`} 
    //         width="640" 
    //         height="480"
    //         allowFullScreen="allowfullscreen"
    //         mozallowfullscreen="mozallowfullscreen" 
    //         msallowfullscreen="msallowfullscreen" 
    //         oallowfullscreen="oallowfullscreen" 
    //         webkitallowfullscreen="webkitallowfullscreen"
    //         ></iframe>
    //       </div>
    //     )
    //   })
    )
  }
}

export default connect(null, { getInfo })(Movies)
