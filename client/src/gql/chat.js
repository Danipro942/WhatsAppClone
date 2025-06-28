import {gql} from '@apollo/client'

export const GET_CHATS = gql`
query Query {
  getChat {
    _id
    members
  }
}
`;

export const ADD_CHAT = gql`
mutation AddChat($idNumber: String!) {
  addChat(idNumber: $idNumber) 
}
`;