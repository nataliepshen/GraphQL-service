import { gql } from 'apollo-server';

export const typeGenres = gql`
extend type Query {
    genres: [Genre]
    genre(id: ID!): Genre
}

type Genre {
    id: ID!
    name: String!
    description: String
    country: String
    year: String
}
`