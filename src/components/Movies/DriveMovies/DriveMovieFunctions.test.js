const functions = require('./DriveMovieFunctions')

describe('Testing the function movieYear', () => {
    test('Years should be an array', () => {
        expect(Array.isArray(functions.movieYear("Jason Bourne(2016).mp4"))).toEqual(true)
    })
    
    test('Years should have 1 item in the array', () => {
        expect(functions.movieYear("Jason Bourne(2016).mp4").length).toBe(1)
    })
    
    test('Item in the years array should be a string', () => {
        expect(typeof functions.movieYear("Jason Bourne(2016).mp4")[0]).toBe('string')
    })
    
    test('Return value of movieYear should be 2016', () => {
        expect(functions.movieYear("Jason Bourne(2016).mp4")[0]).toBe('2016')
    })
    
    test('Return value of movieYear should only contain numbers', () => {
        expect(functions.movieYear("Jason Bourne(2016).mp4")[0]).toMatch(/[0-9]/)
    })
})

describe('Testing the function movieTitles', () => {
    test('Return value of movieTitles should only contain numbers', () => {
        expect(functions.movieTitles("Baby Driver (2017).mp4")[0]).toMatch(/[0-9]/)
    })
    
    test('Item in the MovieTitles array should be a string', () => {
        expect(typeof functions.movieTitles("Baby Driver (2017).mp4")[0]).toBe('string')
    })

    test('MovieTitles should have 1 item in the array', () => {
        expect(functions.movieTitles("Baby Driver (2017).mp4").length).toBe(1)
    })
    
    test('Return value of movieTitles should be Baby%20Driver%20', () => {
        expect(functions.movieTitles("Baby Driver (2017).mp4")[0]).toBe('Baby%20Driver%20')
    })
    
    test('MovieTitles should be an array', () => {
        expect(Array.isArray(functions.movieTitles("Baby Driver (2017).mp4"))).toEqual(true)
    })
    
    test('Return value of movieTitles should contain Driver', () => {
        expect(functions.movieTitles("Baby Driver (2017).mp4")[0]).toContain('Driver')
    })

    test('Return value of movieTitles should be defined', () => {
        expect(functions.movieTitles("Gravity (2013).mp4")[0]).toBeDefined()
    })
})
