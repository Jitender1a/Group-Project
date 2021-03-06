
import React, { Component } from 'react'
import Axios from 'axios' 
import TMDB_api_key from '../../../TMDB_api_key'
import { connect } from 'react-redux';
import { getInfo, search, getPosters } from '../../../ducks/reducer'
import { Link, Redirect } from 'react-router-dom'
import './DriveMovies.css'
import functions from './DriveMovieFunctions'
import HamburgerMenu from 'react-hamburger-menu'
import CheeseburgerMenu from 'cheeseburger-menu' 

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
        search: '',
        a: [],    
        b: [],    
        c: [],    
        d: [],    
        e: [],    
        f: [],    
        g: [],    
        h: [],    
        i: [],    
        j: [],    
        k: [],    
        l: [],    
        m: [],    
        n: [],    
        o: [],    
        p: [],    
        q: [],    
        r: [],    
        s: [],    
        t: [],    
        u: [],    
        v: [],    
        w: [],    
        x: [],    
        y: [],    
        z: [],
        alphabetical: false,
        nextPageToken: '',
        marvelContainer: 'marvel-container',
        keyPress: true,
        open: false,
        mobile: false
      }
  }

    
      componentDidMount(){
        this.updateWidth()
        window.addEventListener('resize', this.updateWidth.bind(this))
        Axios.get('/files').then(res => {
          // console.log(res)
          this.setState({
            movies: res.data,
          })
          let noFolders = this.state.movies.filter(file => {
            return file.name !== 'Movies'
          })
          console.log(noFolders)
          let years = this.state.movies.map(movie => {
            return functions.movieYear(movie.name)
          })
          let allYears = years.map(year => {
            return year[0] 
          })
          this.setState({
            years: allYears
          })

          let titles = this.state.movies.map(movie => {
            return functions.movieTitles(movie.name)
          })
          let allTitles = titles.map(title => {
            return title[0]
          })
          this.setState({
            titles: allTitles
          })


          
          let posters = this.state.movies.map(movie => {
            let id = movie.id
            let noUnderScores = movie.name.replace(/_/g, ' ')
            let noFileFormat = noUnderScores.replace(/.mp4|.mkv|.avi/g, '')
            // console.log('1', noFileFormat)
            let queryString = noFileFormat.replace(/\(|\)/ig, '')
            // console.log('2', queryString)
            let noDate = queryString.replace(/2018|2017|2016|2015|2014|2013|2012|2011|2010|2009|2008|2007|2006|2005|2004|2003|2002|2001|2000|1999|1998|1997|1996|1995|1994|1993|1992|1991|1990|1989|1988|1987|1986|1985|1984|1983|1982|1981|1980|1979|1978|1977|1976|1975|1974|1973|1972|1971|1970|1969|1968|1967|1966|1965|1964|1963|1962|1961|1960|1959|1958|1957|1956|1955|1954|1953|1952|1951|1950|1949|1948|1947|1946|1945|1944|1943|1942|1941|1940|1939|1938|1937|1936|1935|1934|1933|1932|1931|1930/g, '')
            // console.log('3', noDate)
            let noSpaces = noDate.replace(/ /g, '%20')
            // console.log('4', noSpaces)
            let year = noFileFormat.replace(/[^0-9]/ig, '')
            return Axios.get(`https://api.themoviedb.org/3/search/movie?year=${year}&include_adult=false&page=1&query=${noSpaces}&language=en-US&api_key=${TMDB_api_key.tmdb}`)
              .then(res => {
                console.log(res.data.results[0])
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
            // console.log(res.data)
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
            let a = posters.filter(elem => {
              return elem.title[0] === 'A'
            })
            let b = posters.filter(elem => {
              return elem.title[0] === 'B'
            })
            let c = posters.filter(elem => {
              return elem.title[0] === 'C'
            })
            let d = posters.filter(elem => {
              return elem.title[0] === 'D'
            })
            let e = posters.filter(elem => {
              return elem.title[0] === 'E'
            })
            let f = posters.filter(elem => {
              return elem.title[0] === 'F'
            })
            let g = posters.filter(elem => {
              return elem.title[0] === 'G'
            })
            let h = posters.filter(elem => {
              return elem.title[0] === 'H'
            })
            let i = posters.filter(elem => {
              return elem.title[0] === 'I'
            })
            let j = posters.filter(elem => {
              return elem.title[0] === 'J'
            })
            let k = posters.filter(elem => {
              return elem.title[0] === 'K'
            })
            let l = posters.filter(elem => {
              return elem.title[0] === 'L'
            })
            let m = posters.filter(elem => {
              return elem.title[0] === 'M'
            })
            let n = posters.filter(elem => {
              return elem.title[0] === 'N'
            })
            let o = posters.filter(elem => {
              return elem.title[0] === 'O'
            })
            let p = posters.filter(elem => {
              return elem.title[0] === 'P'
            })
            let q = posters.filter(elem => {
              return elem.title[0] === 'Q'
            })
            let r = posters.filter(elem => {
              return elem.title[0] === 'R'
            })
            let s = posters.filter(elem => {
              return elem.title[0] === 'S'
            })
            let t = posters.filter(elem => {
              return elem.title[0] === 'T'
            })
            let u = posters.filter(elem => {
              return elem.title[0] === 'U'
            })
            let v = posters.filter(elem => {
              return elem.title[0] === 'V'
            })
            let w = posters.filter(elem => {
              return elem.title[0] === 'W'
            })
            let x = posters.filter(elem => {
              return elem.title[0] === 'X'
            })
            let y = posters.filter(elem => {
              return elem.title[0] === 'Y'
            })
            let z = posters.filter(elem => {
              return elem.title[0] === 'Z'
            })

            this.setState({
              a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
            })

            this.setState({
              moviePosters: posters.sort(this.compareAlphabetically)
            })
            
            this.props.getPosters(this.state.moviePosters)
          })
        })
      }

      handleChange = (val, key) => {
        let obj = {}
        obj[key] = val
        this.setState(obj)
      }

      searchClick = () => {
        this.props.search(this.state.search)
      }

      handleKeyPress = (e) => {
        if(e.key === 'Enter'){
          this.searchClick()
          this.setState({
            keyPress: false
          })
        }
      }

      openMenu = () => {
        this.setState({
          open: true
        })
      }
      closeMenu = () => {
        this.setState({
          open: false
        })
      }

      updateWidth = () => {
        if(window.innerWidth > 412){
          this.setState({
            mobile: false
          })
        } else {
          this.setState({
            mobile: true
          })
        }
      }
        
      
  render() {
    // console.log(screen)
    console.log(this.state.moviePosters)
    return (
      <div className='drivemovies'>
        <div className='toolbar-container'>
            <div className='button-container'>
            {
              this.state.mobile ?
              <div className='hamburger'>
              <CheeseburgerMenu 
              isOpen={this.state.open}
              closeCallback={this.closeMenu.bind(this)}
              backgroundColor='#1e2126'
              >

              <div className='hamburgerButtons'>

                <div 
                onClick={() => (this.setState({
                  moviePosters: [ ...this.state.moviePosters ].sort(functions.compareAlphabetically),
                  alphabetical: true,
                  marvelContainer: 'marvelContainerAZ',
                  open: false
                }))}
                className='asdf'
                >
                  {/* <i class="fas fa-sort fa-2x"></i> */}
                  <i class="fas fa-th-large fa-2x"></i>
                  <p>
                    A-Z
                  </p>
                </div>
                
                <div
                onClick={() => (this.setState({
                  moviePosters: [ ...this.state.moviePosters ].sort(functions.comparePopularity),
                  alphabetical: false,
                  marvelContainer: 'marvelContainerAZ',
                  open: false
                }))}
                className='asdf'>
                  <i class="fas fa-fire fa-2x"></i>
                  <p>
                  Trending
                </p>
                </div>
                
                <div
                onClick={() => (this.setState({
                  moviePosters: [ ...this.state.moviePosters ].sort(functions.compareRating),
                  alphabetical: false,
                  marvelContainer: 'marvelContainerAZ',
                  open: false
                }))}
                className='asdf'>
                  {/* <i class="fas fa-star-half-alt fa-2x"></i> */}
                  {/* <i class="fas fa-star-half fa-2x"></i> */}
                  {/* <i class="fas fa-star fa-2x"></i> */}
                  <i class="fas fa-film fa-2x"></i>
                  <p>
                    Top Rated
                  </p>
                </div>
                
                <div
                onClick={() => (this.setState({
                  moviePosters: [ ...this.state.moviePosters ].sort(functions.compareReleaseDate),
                  alphabetical: false,
                  marvelContainer: 'marvelContainerAZ',
                  open: false
                }))}
                className='asdf'>
                <i class="fas fa-ticket-alt fa-2x"></i>
                <p>
                  Release Date
                </p>
                </div>

              </div>

              </CheeseburgerMenu>

              <HamburgerMenu
              width={30}
              height={20}
              isOpen={this.state.open}
              menuClicked={this.openMenu.bind(this)}
              color='white'
              animationDuration={0.5}
              />
              </div>
              :
              null
            }

              <button className='a-z'
              onClick={() => (this.setState({
                moviePosters: [ ...this.state.moviePosters ].sort(functions.compareAlphabetically),
                alphabetical: true,
                marvelContainer: 'marvelContainerAZ'
              }))}
              >
                A-Z
              </button>

              <button className='popular'
              onClick={() => (this.setState({
                moviePosters: [ ...this.state.moviePosters ].sort(functions.comparePopularity),
                alphabetical: false,
                marvelContainer: 'marvelContainerAZ'
              }))}
              >
                Trending
              </button>

              <button className='topRated'
              onClick={() => (this.setState({
                moviePosters: [ ...this.state.moviePosters ].sort(functions.compareRating),
                alphabetical: false,
                marvelContainer: 'marvelContainerAZ'
              }))}
              >
                Top Rated
              </button>
              
              <button className='releaseDate'
              onClick={() => (this.setState({
                moviePosters: [ ...this.state.moviePosters ].sort(functions.compareReleaseDate),
                alphabetical: false,
                marvelContainer: 'marvelContainerAZ'
              }))}
              >
                Release Date
              </button>
            </div>
            
            <div className='searchbar'>
              <i class="fas fa-search"
              onChange={(e) => {this.handleChange(e.target.value, 'search')}}
              value={this.state.search}
              onKeyPress={this.handleKeyPress}/>
              <input 
              onChange={(e) => {this.handleChange(e.target.value, 'search')}}
              value={this.state.search}
              onKeyPress={this.handleKeyPress}
              placeholder='Search Movies'
              />
              {
                this.state.keyPress ?

              <Link to='/Search'>
                {/* <button onClick={this.searchClick}>
                  Search
                </button> */}
              </Link>
              :
              <Redirect to='/Search'/>
              }
            </div>
        </div>
        <div className='marvel-container'>
          <div className="the">Le</div>
          <div className="club">Club</div>
          <div className="studios">STUDIO</div>
        </div>

          {
            this.state.alphabetical ?
            <div className='poster-container'>
          {
            this.state.a.length ? 

            <div className='alphabetical'>
              <h1 className='letters'>A</h1>
              {
                this.state.a.map((poster, i) => {
                  return (
                    <div key={i} className='marginRight'>
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
            : 
            null
          }
          {
            this.state.b.length ?

            <div className='alphabetical'>
            <h1 className='letters'>B</h1>
            {
              this.state.b.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.c.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>C</h1>
            {
              this.state.c.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.d.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>D</h1>
            {
              this.state.d.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.e.length ?

            <div className='alphabetical'>
            <h1 className='letters'>E</h1>
            {
              this.state.e.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.f.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>F</h1>
            {
              this.state.f.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.g.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>G</h1>
            {
              this.state.g.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.h.length ?
            
            <div className='alphabetical'>
            <h1 className='letters'>H</h1>
            {
              this.state.h.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.i.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>I</h1>
            {
              this.state.i.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.j.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>J</h1>
            {
              this.state.j.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            : 
            null
          }
          {
            this.state.k.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>K</h1>
            {
              this.state.k.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.l.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>L</h1>
            {
              this.state.l.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.m.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>M</h1>
            {
              this.state.m.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            : 
            null
          }
          {
            this.state.n.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>N</h1>
            {
              this.state.n.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.o.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>O</h1>
            {
              this.state.o.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.p.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>P</h1>
            {
              this.state.p.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.q.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>Q</h1>
            {
              this.state.q.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.r.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>R</h1>
            {
              this.state.r.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.s.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>S</h1>
            {
              this.state.s.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            : 
            null
          }
          {
            this.state.t.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>T</h1>
            {
              this.state.t.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.u.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>U</h1>
            {
              this.state.u.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.v.length ?

            <div className='alphabetical'>
            <h1 className='letters'>V</h1>
            {
              this.state.v.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null 
          }
          {
            this.state.w.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>W</h1>
            {
              this.state.w.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.x.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>X</h1>
            {
              this.state.x.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          {
            this.state.y.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>Y</h1>
            {
              this.state.y.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            : 
            null
          }
          {
            this.state.z.length ? 

            <div className='alphabetical'>
            <h1 className='letters'>Z</h1>
            {
              this.state.z.map((poster, i) => {
                return (
                  <div key={i} className='marginRight'>
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
            :
            null
          }
          </div>
          :
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
          }
        </div>
    )
  }
}

export default connect(null, { getInfo, search, getPosters})(Movies)