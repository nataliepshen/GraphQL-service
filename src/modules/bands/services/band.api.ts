import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class BandAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.BANDS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `${this.context.token}`);
    }

    async getBands() {
        const data = await this.get('');
        return data.items;
    }

    async getBandById(id: string) {
        return await this.get(`/${id}`);
    }

    async createBand(BandInput: any) {
        return await this.post('/', BandInput);
    }

    async updateBand(id: string, BandInput: any) {
        return await this.put(`/${id}`, BandInput);
    }

    async deleteBand(id: string) {
        return await this.delete(`/${id}`);
    }
}