import { gql } from 'apollo-server';

export const typeArtists = gql`
extend type Query {
    artists: [Artist]
    artist(id: ID!): Artist
}

type Artist {
    id: ID!
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String!
    bands: [Band]
    instruments: [String]
}

type Delete {
    acknowledged: Boolean
    deletedCount: Int
}

input ArtistInput {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [ID!]
    instruments: [String]
}

type Mutation {
    createArtist(content: ArtistInput!): Artist
    updateArtist(id: ID!, content: ArtistInput!): Artist
    deleteArtist(id: ID!): Delete
}
`;