const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if (process.argv.length !== 3) {
    return console.log('No argument was provided!')
}

geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {

    if (error) {
        return console.log(error)
    }

    forecast(latitude, longitude, (error, forecastData) => {

        if (error) {
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})
