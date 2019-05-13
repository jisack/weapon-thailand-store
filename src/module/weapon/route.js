const controller = require("./controller");
const Joi = require('joi')

module.exports = server => {
  server.route([
    {
      method: "GET",
      path: "/weapons",
      handler: controller.getList
    },
    {
      method: "GET",
      path: "/weapons/{id}",
      handler: controller.getDetail
    },
    {
      method: "POST",
      path: "/weapons",
      handler: controller.create,
      options: {
        validate: {
            payload: {
                name: Joi.string().min(1).max(50).required(),
                serial: Joi.string().required(),
                amount: Joi.number().required()
            }
        }
      }
    },
    {
      method: "PUT",
      path: "/weapons/{id}",
      handler: controller.update
    },
    {
      method: "DELETE",
      path: "/weapons/{id}",
      handler: controller.remove
    }
  ]);
};
