const compression = require('compression')
const PORT = process.env.PORT || 3000
const router = require('./src/')
const helmet = require('helmet')
const httpError = require('http-errors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const debug = require('debug')('phone-app:server');

const server = require('express')()

server.use(compression())
server.use(cookieParser())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: false
}))
server.use(helmet())
server.use('/', router)

server.use((req, res, next) => {
  debug(`${req.originalUrl}`)
  next(httpError(404, 'Route not found'))
})

server.listen(PORT, () => {
  debug(`Loaded on port ${PORT}`);
  console.log(`Server running on port ${PORT}...`)
})