const { Schema, model } = require('mongoose');

const travellBook = new Schema({
    title:{
        type:String,
        required:true,
        minLenght:3
    },
    image:{
        type:String,
        required:true
    },
    descr:{
        type:String,
        required:true
    }
})
module.exports = model('Travel', travellBook)