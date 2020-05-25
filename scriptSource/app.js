const http = require('http')

const hostname = '127.0.0.1'
const port = 3000 //process.env.PORT

// createServer creates a new HTTP server and returns it.
const server = http.createServer((req, res) => {
    res.statusCode = 200 // statusCode 200, indicates a successful response.
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!!') // close the response, adding the content as an argument 
})

// The server is set to listen on the specified port and host name. 
// When the server is ready, the callback function is called
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})