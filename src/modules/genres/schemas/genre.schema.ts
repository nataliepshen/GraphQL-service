import { gql } from 'apollo-server';

export const typeGenres = gql`
type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}
`