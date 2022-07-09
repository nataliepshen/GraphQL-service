import { gql } from 'apollo-server';

export const typeTracks = gql`
extend type Query {
    tracks(limit: Int, offset: Int): [Track]
    track(id: ID!): Track
}

type Track {
    id: ID!
    title: String!
    album: Album
    bands: [Band]
    artists: [Artist]
    duration: Int
    released: Int
    genres: [Genre]
}

type Delete {
    acknowledged: Boolean
    deletedCount: Int
}

input TrackInput {
    title: String!
    albumId: ID
    bandsIds: [ID!]
    artistsIds: [ID!]
    duration: Int
    released: Int
    genresIds: [ID!]
}

type Mutation {
    createTrack(content: TrackInput!): Track
    updateTrack(id: ID!, content: TrackInput!): Track
    deleteTrack(id: ID!): Delete
}
`;