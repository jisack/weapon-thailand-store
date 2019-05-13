const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/weapon', {useNewUrlParser: true})

mongoose.connection.on('error', (err) => {
    console.log(err)
})

mongoose.connection.once('open', () => {
    console.log('connect mongoose')
})