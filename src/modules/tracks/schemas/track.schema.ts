import { gql } from 'apollo-server';

export const typeTracks = gql`
extend type Query {
    tracks: [Track]
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
`