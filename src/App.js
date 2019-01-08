import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
      this.state.movies.map(movie => {
        return (
          <div>
            <iframe 
            src={`https://drive.google.com/file/d/${movie.id}/preview`} 
            width="640" 
            height="480"
            allowfullscreen="allowfullscreen"
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
