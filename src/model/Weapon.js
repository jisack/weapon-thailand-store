const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Weapon = new Schema ({
    name: {type: String},
    searial: {type: String},
    amount: {type: Number}
},{
    timestamps: true
})

module.exports = mongoose.model('Weapons', Weapon)