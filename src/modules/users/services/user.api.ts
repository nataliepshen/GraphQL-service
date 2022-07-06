import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.USERS_URL;
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`);
    }

    async registerUser(UserInput: any) {
        return await this.post('/register', UserInput);
    }

    async getUserById(id: string) {
        return await this.get(`/${id}`);
    }

    async getJwt(email: string, password: string) {
        return await this.post(`/login`, {email, password});
    }
}