import React, { Component } from 'react'
import Axios from 'axios' 
import TMDB_api_key from '../../TMDB_api_key'

export default class Movies extends Component {
  constructor(){
    super()

    this.state = {
        moviePosters: []
      }
  }

    
      componentDidMount(){
        Axios.get('/files').then(res => {
          this.setState({
            movies: res.data,
          })
          let posters = res.data.map(movie => {
            let noUnderScores = movie.name.replace(/_/g, ' ')
            let noFileFormat = noUnderScores.replace(/.mp4|.mkv/g, '')
            let queryString = noFileFormat.replace(/[0-9]|[()]/ig, '')
            let noSpaces = queryString.replace(/\s/g, '%20')
            let year = noFileFormat.replace(/[^0-9]/ig, '')
            return Axios.get(`https://api.themoviedb.org/3/search/movie?year=${year}&include_adult=false&page=1&query=${noSpaces}&language=en-US&api_key=${TMDB_api_key.tmdb}`).then(res => {
              console.log(res.data.results[0])
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
    return (
        this.state.moviePosters.map((poster, i) => {
          console.log(poster)
          return (
            <div key={i}>
              <img src={poster} alt="" width='500px' height='750px'/>
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
