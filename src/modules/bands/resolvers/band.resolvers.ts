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
        members: async (band: any, _: undefined, { dataSources }: any) => {
            const { members } = band;
            return (await Promise.all(members.map( async (member: any) => {
                return dataSources.artistAPI.getArtistById(member.artistId);
            }))).map((artist: any, index: number) => ({
                ...artist,
                instrument: members[index].instrument,
                years: members[index].years,
            }));
        }
    },
    Member: { id: (parent: any) => parent._id },
    Mutation: {
        createBand: async (_: undefined, BandInput: any, { dataSources }: any) => {
            return await dataSources.bandAPI.createBand(BandInput.content);
        },
        updateBand: async (_: undefined, { id, content }: { id: string, content: any}, { dataSources }: any) => {
            return await dataSources.bandAPI.updateBand(id, content);
        },
        deleteBand: async (_: undefined, {id}: {id: string}, { dataSources }: any) => {
            return await dataSources.bandAPI.deleteBand(id);
        }
    }
}