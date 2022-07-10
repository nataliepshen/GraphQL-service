import { gql } from 'apollo-server';

export const typeGenres = gql`
extend type Query {
    genres(limit: Int, offset: Int): [Genre]
    genre(id: ID!): Genre
}

type Genre {
    id: ID!
    name: String!
    description: String
    country: String
    year: Int
}

type Delete {
    acknowledged: Boolean
    deletedCount: Int
}

input GenreInput {
    name: String!
    description: String
    country: String
    year: Int
}

extend type Mutation {
    createGenre(content: GenreInput!): Genre
    updateGenre(id: ID!, content: GenreInput!): Genre
    deleteGenre(id: ID!): Delete
}
`;