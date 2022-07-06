export const bandResolvers = {
    Query: {
        bands: async (_: undefined, __: undefined, { dataSources }: any) => {
            return await dataSources.bandAPI.getBands();
        },
        band: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.bandAPI.getBandById(`${id}`);
        }
    },
    Band: {
        id: (parent: any) => parent._id,
        genres: async (band: any, _: undefined, { dataSources }: any) => {
            return await band.genresIds.map((item: any) => item = dataSources.genreAPI.getGenreById(item));
        },
        members: async (band: any) => {
            return await band.members;
        }
    }
}