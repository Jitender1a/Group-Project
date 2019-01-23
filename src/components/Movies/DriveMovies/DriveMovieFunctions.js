module.exports = {
    movieYear: (str) => {
        let noUnderScores = str.replace(/_/g, ' ')
        let noFileFormat = noUnderScores.replace(/.mp4|.mkv|.avi/g, '')
        let year = noFileFormat.replace(/[^0-9]/ig, '')
        let years = [] 
        years.push(year)
        return years
    },

    movieTitles: (str) => {
        let noUnderScores = str.replace(/_/g, ' ')
        let noFileFormat = noUnderScores.replace(/.mp4|.mkv|.avi/g, '')
        let queryString = noFileFormat.replace(/[0-9]|[()]/ig, '')
        let noSpaces = queryString.replace(/ /g, '%20')
        let titles = []
        titles.push(noSpaces)
        return titles
    },

    comparePopularity: (a,b) => {
        if(a.popularity > b.popularity){
              return -1
            }
            if(a.popularity < b.popularity){
              return 1
            }
            return 0
      },

      compareRating: (a,b) => {
        if(a.rating > b.rating){
              return -1
            }
            if(a.rating < b.rating){
              return 1
            }
            return 0
      },

      compareReleaseDate: (a,b) => {
        if(a.releaseDate > b.releaseDate){
              return -1
            }
            if(a.releaseDate < b.releaseDate){
              return 1
            }
            return 0
      },

      compareAlphabetically: (a,b) => {
        if(a.title < b.title){
              return -1
            }
            if(a.title > b.title){
              return 1
            }
            return 0
      }
}