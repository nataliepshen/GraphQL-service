import { gql } from 'apollo-server';

export const typeBands = gql`
extend type Query {
    bands(limit: Int, offset: Int): [Band]
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
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
}

type Delete {
    acknowledged: Boolean
    deletedCount: Int
}

input BandInput {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID!]
}

input MemberInput {
    artistId: ID!
    instrument: String
    years: [String]
}

type Mutation {
    createBand(content: BandInput!): Band
    updateBand(id: ID!, content: BandInput!): Band
    deleteBand(id: ID!): Delete
}
`;