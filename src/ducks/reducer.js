
let initialState = {
    isAuthenticated: false,
    user: {},
    info: {},
    search: '',
    posters: []
}

const USER_LOGGED_IN = 'USER_LOGGED_IN'
const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
const GET_INFO = 'GET_INFO'
const SEARCH = 'SEARCH'
const GET_POSTERS = 'GET_POSTERS'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        
        case USER_LOGGED_IN:
            return { ...state, isAuthenticated: true , user: action.payload }
        
        case USER_LOGGED_OUT:
            return { ...state, isAuthenticated: false, user: {} }

        case GET_INFO:
            return { ...state, info: action.payload }

        case SEARCH: 
            return { ...state, search: action.payload }
        
        case GET_POSTERS:
            return { ...state, posters: action.payload }

        default: 
            return state
    }
}


export function userLoggedIn(user) {
    return {
      type: USER_LOGGED_IN,
      payload: user
    }
  }
  
  export function userLoggedOut() {
    return {
      type: USER_LOGGED_OUT
    }
  }

  export function getInfo(info){
      return {
          type: GET_INFO,
          payload: info
      }
  }

  export function search(search){
      return {
          type: SEARCH,
          payload: search
      }
  }

  export function getPosters(posters){
    return {
        type: GET_POSTERS,
        payload: posters
    }
  }
