import { albumResolvers } from "./modules/albums/resolvers/album.resolvers";
import { artistResolvers } from "./modules/artists/resolvers/artist.resolvers";
import { bandResolvers } from "./modules/bands/resolvers/band.resolvers";
import { genresResolvers } from "./modules/genres/resolvers/genre.resolvers";
import { trackResolvers } from "./modules/tracks/resolvers/track.resolvers";
import { userResolvers } from "./modules/users/resolvers/user.resolvers";


export const resolvers = [
    albumResolvers,
    artistResolvers,
    bandResolvers,
    genresResolvers,
    trackResolvers,
    userResolvers
];