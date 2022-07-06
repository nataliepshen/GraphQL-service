import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class ArtistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getArtists() {
        const data = await this.get('');
        return data.items;
    }

    async getArtistById(id: string) {
        return await this.get(`/${id}`);
    }
}