export const artistResolvers = {
    Query: {
        artists: async (_: undefined, {limit, offset}: {limit: number, offset: number}, { dataSources }: any) => {
            return await dataSources.artistAPI.getArtists(limit, offset);
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
    },
    Mutation: {
        createArtist: async (_: undefined, ArtistInput: any, { dataSources }: any) => {
            return await dataSources.artistAPI.createArtist(ArtistInput.content);
        },
        updateArtist: async (_: undefined, { id, content }: { id: string, content: any}, { dataSources }: any) => {
            return await dataSources.artistAPI.updateArtist(id, content);
        },
        deleteArtist: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.artistAPI.deleteArtist(id);
        }
    }
}