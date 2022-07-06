export const albumResolvers = {
    Query: {
        albums: async (_: undefined, __: undefined, { dataSources }: any) => {
            return await dataSources.albumAPI.getAlbums();
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
    }
}