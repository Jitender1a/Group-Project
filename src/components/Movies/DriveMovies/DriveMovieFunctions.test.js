const functions = require('./DriveMovieFunctions')

describe('Testing the function movieYear', () => {
    
    test('Movie Title should be a string', () => {
        expect(typeof functions.movieTitles("Fast Five(2011).mp4")[0]).toBe('string')
    })

    test('Movieyear should be 2011', () => {
        expect(functions.movieYear("Fast Five(2011).mp4")[0]).toBe('2011')
    })
    
    test('An Array should be returned', () => {
        expect(Array.isArray(functions.movieYear("Fast Five(2011).mp4"))).toEqual(true)
    })

    test('should be a string', () => {
        expect(typeof functions.movieTitles("Fast Five(2011).mp4")[0]).toBe('string')
    })

    test('Years should only have one item in the array', () => {
        expect(functions.movieYear("Fast Five(2011).mp4.mp4").length).toBe(1)
    })
 
})

