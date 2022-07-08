import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const typeAlbums: DocumentNode = gql`
type Query {
    albums: [Album]
    album(id: ID!): Album
}

type Album {
    id: ID!
    name: String!
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}

type Delete {
    acknowledged: Boolean
    deletedCount: Int
}

input AlbumInput {
    name: String!
    released: Int
    artistsIds: [ID!]
    bandsIds: [ID!]
    trackIds: [ID!]
    genresIds: [ID!]
}

type Mutation {
    createAlbum(content: AlbumInput!): Album
    updateAlbum(id: ID!, content: AlbumInput!): Album
    deleteAlbum(id: ID!): Delete
}
`;