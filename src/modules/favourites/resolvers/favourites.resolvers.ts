export const favouritesResolvers = {
    Query: {
        favourites: async (_: undefined, __: undefined, { dataSources }: any) => {
            return await dataSources.favouritesAPI.getFavourites();
        }
    },
    Favourites: {
        id: (parent: any) => parent._id,
        artists: async (favourites: any, _: undefined, { dataSources }: any) => {
            return await favourites.artistsIds.map((item: any) => item = dataSources.artistAPI.getArtistById(item));
        },
        bands: async (favourites: any, _: undefined, { dataSources }: any) => {
            return await favourites.bandsIds.map((item: any) => item = dataSources.bandAPI.getBandById(item));
        },
        tracks: async (favourites: any, _: undefined, { dataSources }: any) => {
            return await favourites.tracksIds.map((item: any) => item = dataSources.trackAPI.getTrackById(item));
        },
        genres: async (favourites: any, _: undefined, { dataSources }: any) => {
            return await favourites.genresIds.map((item: any) => item = dataSources.genreAPI.getGenreById(item));
        }
    },
    Mutation: {
        addArtistToFavourites: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.favouritesAPI.addToFavourites('artists', id);
        },
        addBandToFavourites: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.favouritesAPI.addToFavourites('bands', id);
        },
        addGenreToFavourites: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.favouritesAPI.addToFavourites('genres', id);
        },
        addTrackToFavourites: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.favouritesAPI.addToFavourites('tracks', id);
        }
    }
}