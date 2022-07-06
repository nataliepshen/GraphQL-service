import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class BandAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async getBands() {
        const data = await this.get('');
        return data.items;
    }

    async getBandById(id: string) {
        return await this.get(`/${id}`);
    }
}