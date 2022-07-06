export const userResolvers = {
    Query: {
        user: async (_: undefined, {id}: {id: string}, {dataSources}: any) => {
            return await dataSources.userAPI.getUserById(id);
        },
        token: async (_: undefined, {email, password}: {email: string, password: string}, {dataSources}: any) => {
            const data = await dataSources.userAPI.getJwt(email, password);
            return data;
        }
    },
    User: {
        id: (parent: any) => parent._id
    },
    Mutation: {
        register: async (_: undefined, UserInput: any, {dataSources}: any) => {
            const data = await dataSources.userAPI.registerUser(UserInput.content);
            console.log(data);
            return data;
        }
    }
}