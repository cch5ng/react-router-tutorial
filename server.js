//server.js
//prod web server
var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

// serve our static stuff like index.css
app.use(express.static(__dirname))

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log('Production Express server running at localhost:' + PORT)
})