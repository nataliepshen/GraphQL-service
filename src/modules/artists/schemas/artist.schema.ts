import { gql } from 'apollo-server';

export const typeArtists = gql`
type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
}
`