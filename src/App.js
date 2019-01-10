import React, { Component } from 'react';import './App.css';
import DriveMovies from './components/Movies/DriveMovies'
import {Switch, Route} from 'react-router-dom'

//Layout
import AboutUs from './components/Layout/AboutUs'
import Contact from './components/Layout/Contact'
import Homepage from './components/Layout/Homepage'
import Nav from './components/Layout/Nav'
import OurTeam from './components/Layout/OurTeam'
import SideNav from './components/Layout/SideNav'
import SplashScreen from './components/Layout/SplashScreen'

//Movies
import AllMovies from './components/Movies/AllMovies'
import KidsMovies from './components/Movies/KidsMovies'
import MovieGenres from './components/Movies/MovieGenres'
import MoviesInfo from './components/Movies/MoviesInfo'
import MovieTrailers from './components/Movies/MovieTrailers'
import PopularMovies from './components/Movies/PopularMovies'
import RandomMovies from './components/Movies/RandomMovies'
import RecentlyWatchedMovies from './components/Movies/RecentlyWatchedMovies'
import TrendingMovies from './components/Movies/TrendingMovies'

//Tools
import Admin from './components/Tools/Admin'
import GoogleCast from './components/Tools/GoogleCast'
import Settings from './components/Tools/Settings'

//Tv Shows
import AllTvShows from './components/TvShows/AllTvShows'
import DriveTvShows from './components/TvShows/DriveTvShows'
import KidsTvShows from './components/TvShows/KidsTvShows'
import PopularTvShows from './components/TvShows/Popular'
import RandomTvShows from './components/TvShows/RandomTvShows'
import RecentlyWatchedTvShows from './components/TvShows/RecentlyWatchedTvShows'
import TrendingTvShows from './components/TvShows/TrendingTvShows'
import TvShowGenres from './components/TvShows/TvShowGenres'
import TvShowsInfo from './components/TvShows/TvShowsInfo'
import TvShowTrailers from './components/TvShows/TvShowTrailers'

//User
import Login from './components/User/Login'
import Register from './components/User/Register'
import LoginHome from './components/User/LoginHome'
import Logout from './components/User/Logout'
import UserAccount from './components/User/UserAccount'





class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/Login' component={Login}/>
            <Route path='/Register' component={Register}/>
            <Route path='/LoginHome' component={LoginHome}/>
            <Route path='/Logout' component={Logout}/>
        </Switch>
      </div>
    );
  }
}

export default App;
  

{/* <Route path='/AboutUs' component={AboutUs}/> */}
{/* <Route path='/Contact' component={Contact}/> */}
{/* <Route path='/OurTeam' component={OurTeam}/> */}
{/* <Route path='/SideNav' component={SideNav}/> */}
{/* <Route path='/SplashScreen' component={SplashScreen}/> */}

{/* <Route path='/AllMovies' component={AllMovies}/> */}
{/* <Route path='/KidsMovies' component={KidsMovies}/> */}
{/* <Route path='/MovieGenres' component={MovieGenres}/> */}
{/* <Route path='/MoviesInfo' component={MoviesInfo}/> */}
{/* <Route path='/MovieTrailers' component={MovieTrailers}/> */}
{/* <Route path='/PopularMovies' component={PopularMovies}/> */}
{/* <Route path='/RandomMovies' component={RandomMovies}/> */}
{/* <Route path='/RecentlyWatchedMovies' component={RecentlyWatchedMovies}/> */}
{/* <Route path='/TrendingMovies' component={TrendingMovies}/> */}

{/* <Route path='/Admin' component={Admin}/> */}
{/* <Route path='/GoogleCast' component={GoogleCast}/> */}
{/* <Route path='/Settings' component={Settings}/> */}

{/* <Route path='/AllTvShows' component={AllTvShows}/> */}
{/* <Route path='/DriveTvShows' component={DriveTvShows}/> */}
{/* <Route path='/KidsTvShows' component={KidsTvShows}/> */}
{/* <Route path='/PopularTvShows ' component={PopularTvShows }/> */}
{/* <Route path='/RandomTvShows' component={RandomTvShows}/> */}
{/* <Route path='/RecentlyWatchedTvShows' component={RecentlyWatchedTvShows}/> */}
{/* <Route path='/TrendingTvShows' component={TrendingTvShows}/> */}
{/* <Route path='/TvShowGenres' component={TvShowGenres}/> */}
{/* <Route path='/TvShowsInfo' component={TvShowsInfo}/> */}
{/* <Route path='/TvShowTrailers' component={TvShowTrailers}/> */}

{/* <Route path='/UserAccount' component={UserAccount}/> */}