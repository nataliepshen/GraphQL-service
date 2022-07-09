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

input FavouritesInput {
    type: String
    id: String
}

type Mutation {
    addFavourites(content: FavouritesInput!): Favourites
}
`;