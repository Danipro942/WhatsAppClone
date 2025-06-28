const Chat = require('../models/chat')
const User = require('../models/user')

async function addChat(idNumber, ctx) {
    if (ctx.user === undefined) throw new Error('No estas autentificado')
    console.log('From AddGet')
    const { id, numberID } = ctx.user

    // Verificamos si el usuaior existe 
    const userFound = await User.findById(id)

    if (!userFound) throw new Error('No estas autentificado')

    // Buscamos el id del idNumber
    const SearchId = await User.findOne({ numberID: idNumber })
    if (!SearchId) throw new Error('El numero esta mal')


    // Verificamos que no se repita los chat
    const chatExisting = await Chat.find({
        members: { $in: [numberID] },
    });
    console.log(chatExisting, 'si')
    chatExisting.map(e => {
        console.log(e)
        const filterChat = e.members.filter(i => i === idNumber)
        if(filterChat.length > 0) throw new Error('chatExisting')
    })

    try {
        const chat = new Chat({
            members: [numberID, idNumber],
        });


        chat.save()
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

async function getChat(ctx) {
    console.log(ctx, 'chat')
    if (!ctx.user) throw new Error('No estas autentificado')

    const chatFound = await Chat.find().where('members').equals(ctx.user.numberID)
    console.log(chatFound, 'Efectivo')


    try {
        return chatFound
    } catch (error) {
        console.log(error)
        return false
    }
}

module.exports = {
    addChat,
    getChat
}