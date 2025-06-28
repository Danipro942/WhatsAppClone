import {gql} from '@apollo/client'

export const GET_MESSAGE = gql`
query GetMessage($conversationId: String) {
  getMessage(conversationID: $conversationId) {
    conversationID
    text
    sender
  }
}
`;

export const ADD_MESSAGE = gql`
mutation SendMessage($input: SendMessage) {
  sendMessage(input: $input)
}
`