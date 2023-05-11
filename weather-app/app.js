const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=<KEY>&query=37.8267,-122.4233&units=f'

request( { url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature
        + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out')
})

const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=<TOKEN>'

request( { url: url2, json: true }, (error, response) => {
    console.log('Lat: ' + response.body.features[0].center[1] + ' | Long: ' + response.body.features[0].center[0])
})
