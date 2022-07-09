import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class GenreAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.GENRES_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getGenres(limit = 5, offset = 0) {
        const data = await this.get('', {
            "limit": limit,
            "offset": offset
        });
        return data.items;
    }

    async getGenreById(id: string) {
        return await this.get(`/${id}`);
    }

    async createGenre(GenreInput: any) {
        return await this.post('/', GenreInput);
    }
    
    async updateGenre(id: string, GenreInput: any) {
        return await this.put(`/${id}`, GenreInput);
    }

    async deleteGenre(id: string) {
        return await this.delete(`/${id}`);
    }
}