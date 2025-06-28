const Message = require('../models/message')
const Chat = require('../models/chat')

function sendMessage(input,ctx) {
    if (ctx.user === undefined) throw new Error('No estas autentificado')
    const {id} = ctx.user
    const {conversationID, text} = input



    console.log(id)
    try {
        const message = Message({conversationID, text, sender: id})
        message.save()
        return true
    } catch (error) {
     return false   
    }


}

async function getMessage(conversationID,ctx) {

    console.log(conversationID)
    const foundMessage = await Message.find().where('conversationID').equals(conversationID)

    console.log(foundMessage)

    try {
        return foundMessage
    
} catch (error) {
    
}
}

module.exports = {
    sendMessage,
    getMessage
}