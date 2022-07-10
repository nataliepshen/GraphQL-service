import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class ArtistAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ARTISTS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getArtists(limit = 5, offset = 0) {
        const data = await this.get('', {
            "limit": limit,
            "offset": offset
        });
        return data.items;
    }

    async getArtistById(id: string) {
        return await this.get(`/${id}`);
    }

    async createArtist(ArtistInput: any) {
        return await this.post('/', ArtistInput);
    }

    async updateArtist(id: string, ArtistInput: any) {
        return await this.put(`/${id}`, ArtistInput);
    }

    async deleteArtist(id: string) {
        return await this.delete(`/${id}`);
    }
}