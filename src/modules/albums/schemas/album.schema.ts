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
`