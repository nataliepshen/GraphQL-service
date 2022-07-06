export const artistResolvers = {
    Query: {
        artists: async (_: undefined, __: undefined, { dataSources }: any) => {
            return await dataSources.artistAPI.getArtists();
        },
        artist: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.artistAPI.getArtistById(`${id}`);
        }
    },
    Artist: {
        id: (parent: any) => parent._id,
        bands: async (artist: any, _: undefined, { dataSources }: any) => {
            return await artist.bandsIds.map((item: any) => item = dataSources.bandAPI.getBandById(item));
        }
    }
}