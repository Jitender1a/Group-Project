const functions = require('./DriveMovieFunctions')

test('Years should be an array', () => {
    expect(Array.isArray(functions.movieYear("Jason Bourne(2016).mp4"))).toEqual(true)
})