import { RESTDataSource } from "apollo-datasource-rest";

class AlbumAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = process.env.ALBUMS_URL;
    }

    getAlbums() {
        return this.get('albums');
    }
}

export { AlbumAPI };