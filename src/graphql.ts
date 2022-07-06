import { gql } from 'apollo-server';
import { typeAlbums } from './modules/albums/schemas/album.schema';
import { typeArtists } from './modules/artists/schemas/artist.schema';
import { typeBands } from './modules/bands/schemas/band.schema';
import { typeFavourites } from './modules/favourites/schemas/favourites.schema';
import { typeGenres } from './modules/genres/schemas/genre.schema';
import { typeTracks } from './modules/tracks/schemas/track.schema';
import { typeUsers } from './modules/users/schemas/user.schema';

export const typeDefs = gql`
    ${typeAlbums}
    ${typeArtists}
    ${typeBands}
    ${typeFavourites}
    ${typeGenres}
    ${typeTracks}
    ${typeUsers}
`;