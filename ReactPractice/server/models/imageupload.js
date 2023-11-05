const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    Name:String,
    imageFile:String
})

const imageUpload = mongoose.model("images",imageSchema);

module.exports = imageUpload;