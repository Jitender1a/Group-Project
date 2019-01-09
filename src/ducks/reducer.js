const initialState = {
    movies: []
}

const GET_MOVIES = 'GET_MOVIES'

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case GET_MOVIES:
            return { ...state, movies: action.payload}
    
        default:
            return state
    }
}

export function getMovies(movies){
    return {
        type: GET_MOVIES,
        payload: movies
    }
}