import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getGenres() {
        const data = await this.get('');
        return data.items;
    }

    async getGenreById(id: string) {
        return await this.get(`/${id}`);
    }
}