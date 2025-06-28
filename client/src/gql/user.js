import {gql} from '@apollo/client'

export const SEARCH_USER = gql`
mutation SearchContact($idNumber: String!) {
  searchContact(idNumber: $idNumber) {
    name
    numberID
    avatar
  }
}
`

export const REGISTER = gql`
mutation Register($input: UserInput) {
  register(input: $input)
}

`
export const LOGIN = gql`
mutation Login($input: LoginInput) {
  login(input: $input) {
    token
  }
}

`;

export const UPDATE_USER = gql`
mutation UpdateUser($input: UpdateUser) {
  updateUser(input: $input)
}




`