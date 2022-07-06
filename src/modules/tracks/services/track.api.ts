import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getTracks() {
        const data = await this.get('');
        return data.items;
    }

    async getTrackById(id: string) {
        return await this.get(`/${id}`);
    }
}