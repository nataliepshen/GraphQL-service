import { gql } from 'apollo-server';

export const typeFavourites = gql`
extend type Query {
    favourites: Favourites
}

type Favourites {
    id: ID!
    userId: ID!
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}

type Mutation {
    addArtistToFavourites(id: ID!): Favourites
    addBandToFavourites(id: ID!): Favourites
    addGenreToFavourites(id: ID!): Favourites
    addTrackToFavourites(id: ID!): Favourites
}
`;