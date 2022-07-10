export const albumResolvers = {
    Query: {
        albums: async (_: undefined, {limit, offset}: {limit: number, offset: number}, { dataSources }: any) => {
            return await dataSources.albumAPI.getAlbums(limit, offset);
        },
        album: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.albumAPI.getAlbumById(`${id}`);
        }
    },
    Album: {
        id: (parent: any) => parent._id,
        artists: async (album: any, _: undefined, { dataSources }: any) => {
            return await album.artistsIds.map((item: any) => item = dataSources.artistAPI.getArtistById(item));
        },
        bands: async (album: any, _: undefined, { dataSources }: any) => {
            return await album.bandsIds.map((item: any) => item = dataSources.bandAPI.getBandById(item));
        },
        tracks: async (album: any, _: undefined, { dataSources }: any) => {
            return await album.trackIds.map((item: any) => item = dataSources.trackAPI.getTrackById(item));
        },
        genres: async (album: any, _: undefined, { dataSources }: any) => {
            return await album.genresIds.map((item: any) => item = dataSources.genreAPI.getGenreById(item));
        }
    },
    Mutation: {
        createAlbum: async (_: undefined, AlbumInput: any, { dataSources }: any) => {
            return await dataSources.albumAPI.createAlbum(AlbumInput.content);
        },
        updateAlbum: async (_: undefined, { id, content }: { id: string, content: any}, { dataSources }: any) => {
            return await dataSources.albumAPI.updateAlbum(id, content);
        },
        deleteAlbum: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.albumAPI.deleteAlbum(id);
        }
    }
}