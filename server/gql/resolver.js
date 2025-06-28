const userControllers = require('../controllers/user')
const chatControllers = require('../controllers/chat')
const MessageControllers = require('../controllers/message')

const resolver = {
    Query: {
        getChat: (_, {}, ctx) => chatControllers.getChat(ctx),
        getMessage: (_, {conversationID}, ctx) => MessageControllers.getMessage(conversationID, ctx)
    },
    Mutation: {
        register: (_, {input}) => userControllers.register(input),
        login: (_, {input}) => userControllers.login(input),
        searchContact: (_, {idNumber}, ctx) => userControllers.searchContact(idNumber, ctx),
        addChat: (_, {idNumber}, ctx) =>  chatControllers.addChat(idNumber, ctx),
        sendMessage: (_ ,{input}, ctx) => MessageControllers.sendMessage(input,ctx),
        updateUser: (_ ,{input}, ctx) => userControllers.updateUser(input, ctx)
    }
}


module.exports = resolver