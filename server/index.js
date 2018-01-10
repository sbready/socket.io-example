const app = require('express')()
    , bodyParser = require('body-parser')
    , socket = require('socket.io')
    , port = 3005

app.use(bodyParser.json())

const io = socket(app.listen(port, _=> console.log(`listening on port ${port}`)))

io.on( 'connection', socket => {
    console.log('connection est. 2018')

    socket.on('send message', input => {
        socket.emit( 'response', { message: 'U Suck!' } )
    })
} )