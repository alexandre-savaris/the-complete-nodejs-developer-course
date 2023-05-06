const fs = require('fs')

const buffer = fs.readFileSync('1-json.json')
const bufferAsString = buffer.toString()
const stringAsJSON = JSON.parse(bufferAsString)

stringAsJSON.name = 'Alexandre'
stringAsJSON.age = 44

const newJSONAsString = JSON.stringify(stringAsJSON)
fs.writeFileSync('1-json.json', newJSONAsString)
