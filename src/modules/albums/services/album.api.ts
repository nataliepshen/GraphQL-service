import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getAlbums() {
        const data = await this.get('');
        return data.items;
    }

    async getAlbumById(id: string) {
        return await this.get(`/${id}`);
    }
}