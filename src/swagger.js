const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ['./build/router.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./app.js')
})