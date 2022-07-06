export const genresResolvers = {
    Query: {
        genres: async (_: undefined, __: undefined, { dataSources }: any) => {
            return await dataSources.genreAPI.getGenres();
        },
        genre: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.genreAPI.getGenreById(`${id}`);
        }
    },
    Genre: {
        id: (parent: any) => parent._id
    }

}