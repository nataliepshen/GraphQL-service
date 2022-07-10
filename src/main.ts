import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql';
import { resolvers } from './resolvers';
import { ArtistAPI } from './modules/artists/services/artist.api';
import { config } from "dotenv";
import { AlbumAPI } from './modules/albums/services/album.api';
import { BandAPI } from './modules/bands/services/band.api';
import { GenreAPI } from './modules/genres/services/genre.api';
import { TrackAPI } from './modules/tracks/services/track.api';
import { UserAPI } from './modules/users/services/user.api';
import { FavouritesAPI } from './modules/favourites/services/favourites.api';

config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || '';
        return { token };
    },
    dataSources: () => {
        return {
            albumAPI: new AlbumAPI(),
            artistAPI: new ArtistAPI(),
            bandAPI: new BandAPI(),
            genreAPI: new GenreAPI(),
            trackAPI: new TrackAPI(),
            userAPI: new UserAPI(),
            favouritesAPI: new FavouritesAPI()
        }
    }
});

server.listen(process.env.PORT).then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port ${process.env.PORT}
        📭  Query at https://studio.apollographql.com/dev
    `);
});
