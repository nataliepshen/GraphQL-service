import { gql } from 'apollo-server';

export const typeBands = gql`
extend type Query {
    bands: [Band]
    band(id: ID!): Band
}

type Band {
    id: ID!
    name: String!
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

type Member {
    artist: String
    instrument: String
    years: [String]
}
`