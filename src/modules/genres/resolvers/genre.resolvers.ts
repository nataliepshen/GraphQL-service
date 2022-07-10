export const genresResolvers = {
    Query: {
        genres: async (_: undefined, {limit, offset}: {limit: number, offset: number}, { dataSources }: any) => {
            return await dataSources.genreAPI.getGenres(limit, offset);
        },
        genre: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.genreAPI.getGenreById(`${id}`);
        }
    },
    Genre: {
        id: (parent: any) => parent._id
    },
    Mutation: {
        createGenre: async (_: undefined, GenreInput: any, { dataSources }: any) => {
            return await dataSources.genreAPI.createGenre(GenreInput.content);
        },
        updateGenre: async (_: undefined, { id, content }: { id: string, content: any}, { dataSources }: any) => {
            return await dataSources.genreAPI.updateGenre(id, content);
        },
        deleteGenre: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.genreAPI.deleteGenre(id);
        }
    }
}