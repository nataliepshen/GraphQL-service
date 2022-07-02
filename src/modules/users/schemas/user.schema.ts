import { gql } from 'apollo-server';

export const typeUsers = gql`
type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
}
`