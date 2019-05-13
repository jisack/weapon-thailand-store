const controller = require('./controller')

module.exports = (server) => {
    server.route([
        {
            method: 'GET',
            path:'/weapons',
            handler: controller.getList
        },
        {
            method: 'GET',
            path:'/weapons/{id}',
            handler: controller.getDetail
        },
        {
            method: 'POST',
            path:'/weapons',
            handler: controller.create
        },
        {
            method: 'PUT',
            path:'/weapons/{id}',
            handler: controller.update
        },{
            method: 'DELETE',
            path:'/weapons/{id}',
            handler: controller.remove
        }
    ])
}