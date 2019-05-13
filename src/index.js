'use strict'

const Hapi = require('hapi')
const weaponRoute = require('./module/weapon/route')

require('../database')

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {
            return 'Hello World!'
        }
    });

    weaponRoute(server)
    await server.start()
    console.log('Server running on %ss', server.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()