import { ApolloServer } from 'apollo-server';
import { typeAlbums } from './modules/albums/schemas/album.schema';
import { resolvers } from './modules/albums/resolvers/album.resolvers';
import { AlbumAPI } from './modules/albums/services/album.api';

const server = new ApolloServer({
    typeAlbums,
    resolvers,
    dataSources: () => {
        return {
            albumAPI: new AlbumAPI()
        }
    }
});

server.listen(4000).then(() => {
    console.log('Server is running!');
});