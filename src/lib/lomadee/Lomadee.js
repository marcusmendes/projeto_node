import api from './service/api';
import apiConfig from './config/auth';

export default class Lomadee {
  constructor() {
    this.sourceId = apiConfig[process.env.NODE_ENV].sourceId;
    this.itemsPerPage = 20;
  }

  get(path, queryParams) {
    const params = { ...queryParams, sourceId: this.sourceId };
    return api.get(path, { params });
  }
}
