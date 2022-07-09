import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class FavouritesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.FAVOURITES_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getFavourites() {
        const data = await this.get('');
        return data;
    }

    async addToFavourites(type: string, id: string) {
        return await this.put('/add', {type, id});
    }
}