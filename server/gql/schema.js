const { gql } = require('apollo-server')

const typeDefs = gql`

type User {
    name: String!
    email: String!
    password: String!
    numberID: String
    avatar: String
    id: ID!
}


type Token {
  token: String
  }

type InfoUser{
    numberID: String
    name: String!
    avatar: String
  
}



  type Chats {
    members: [String]
    _id: String
  }

  type Message {
  conversationID: ID!
  sender: String
  text: String!
}


input UserInput {
    name: String!
    email: String!
    password: String!
    avatar: String
}

input UpdateUser {
    name: String
    email: String
    password: String
    avatar: String
}

input LoginInput{
    email: String!
    password: String!
}

input SendMessage {
  conversationID: ID!
  sender: String
  text: String!
}


type Query {
  getChat: [Chats]
  getMessage(conversationID: String): [Message]
}

type Mutation {
  register(input: UserInput): Boolean
  login(input: LoginInput): Token
  searchContact(idNumber: String!): InfoUser
  addChat(idNumber: String!): Boolean
  sendMessage(input: SendMessage): Boolean
  updateUser(input: UpdateUser): Boolean
}

`;


module.exports = typeDefs