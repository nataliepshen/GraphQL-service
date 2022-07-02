const resolvers = {
    Query: {
        albums: (_: undefined, __: undefined, { dataSources }: any) => {
            return dataSources.albumAPI.getAlbums();
        }
    }
}

export { resolvers };