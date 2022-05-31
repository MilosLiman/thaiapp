const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = Schema({
    name: String,
    email: String,
    message: String,
});


const Message = mongoose.model("Message", messageSchema)
module.exports = Message;