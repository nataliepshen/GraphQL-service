import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class TrackAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.TRACKS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getTracks(limit = 5, offset = 0) {
        const data = await this.get('', {
            "limit": limit,
            "offset": offset
        });
        return data.items;
    }

    async getTrackById(id: string) {
        return await this.get(`/${id}`);
    }

    async createTrack(TrackInput: any) {
        return await this.post('/', TrackInput);
    }
    
    async updateTrack(id: string, TrackInput: any) {
        return await this.put(`/${id}`, TrackInput);
    }

    async deleteTrack(id: string) {
        return await this.delete(`/${id}`);
    }
}