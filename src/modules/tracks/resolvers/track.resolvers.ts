export const trackResolvers = {
    Query: {
        tracks: async (_: undefined, __: undefined, { dataSources }: any) => {
            return await dataSources.trackAPI.getTracks();
        },
        track: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.trackAPI.getTrackById(`${id}`);
        }
    },
    Track: {
        id: (parent: any) => parent._id,
        artists: async (track: any, _: undefined, { dataSources }: any) => {
            return await track.artistsIds.map((item: any) => item = dataSources.artistAPI.getArtistById(item));
        },
        bands: async (track: any, _: undefined, { dataSources }: any) => {
            return await track.bandsIds.map((item: any) => item = dataSources.bandAPI.getBandById(item));
        },
        genres: async (track: any, _: undefined, { dataSources }: any) => {
            return await track.genresIds.map((item: any) => item = dataSources.genreAPI.getGenreById(item));
        },
        album: async (track: any, _: undefined, { dataSources }: any) => {
            return track.albumId = await dataSources.albumAPI.getAlbumById(track.albumId);
        }
    },
    Mutation: {
        createTrack: async (_: undefined, TrackInput: any, { dataSources }: any) => {
            return await dataSources.trackAPI.createTrack(TrackInput.content);
        },
        updateTrack: async (_: undefined, { id, content }: { id: string, content: any}, { dataSources }: any) => {
            return await dataSources.trackAPI.updateTrack(id, content);
        },
        deleteTrack: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.trackAPI.deleteTrack(id);
        }
    }
}