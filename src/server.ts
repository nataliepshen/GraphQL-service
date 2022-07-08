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
            userAPI: new UserAPI()
        }
    }
});

server.listen(4000).then(() => {
    console.log('Server is running!');
});
