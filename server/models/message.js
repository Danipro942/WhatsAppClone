const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MessageSchema = Schema({
    conversationID: {
        type: String
    },

    sender: {
        type: String
    },


    text: {
        type: String
    }
})


module.exports = mongoose.model('Message', MessageSchema)