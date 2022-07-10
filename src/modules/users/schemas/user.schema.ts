import { gql } from 'apollo-server';

export const typeUsers = gql`
extend type Query {
    user(id: ID!): User
    token(email: String!, password: String!): Jwt
}

type Jwt {
    jwt: String!
}

type User {
    id: ID!
    firstName: String!
    lastName: String!
    password: String!
    email: String!
}

input UserInput {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
}

extend type Mutation {
    register(content: UserInput!): User
}
`;