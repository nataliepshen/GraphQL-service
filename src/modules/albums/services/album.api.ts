import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    async willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getAlbums() {
        const data = await this.get('');
        return data.items;
    }

    async getAlbumById(id: string) {
        return await this.get(`/${id}`);
    }

    async createAlbum(AlbumInput: any) {
        return await this.post('/', AlbumInput);
    }
    async updateAlbum(id: string, AlbumInput: any) {
        return await this.put(`/${id}`, AlbumInput);
    }

    async deleteAlbum(id: string) {
        return await this.delete(`/${id}`);
    }
}