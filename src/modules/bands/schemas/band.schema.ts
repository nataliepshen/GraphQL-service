import { gql } from 'apollo-server';

export const typeBands = gql`
type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

type Member {
    id: ID!
    artist: String
    instrument: String
    years: [String]
}
`