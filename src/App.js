import React, { Component } from 'react';import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount(){
    Axios.get('/files').then(res => {
      console.log(res.data)
      this.setState({
        movies: res.data
      })
    })
  }
  render() {
    return (
      this.state.movies.map((movie, i) => {
        return (
          <div key={i}>
            <iframe 
            title='movie'
            src={`https://drive.google.com/file/d/${movie.id}/preview`} 
            width="640" 
            height="480"
            allowFullScreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        )
      })
    );
  }
}

export default App;
