import { AxiosResponse } from 'axios';
import Api from './service/Api';
import Auth from './config/Authentication';

/**
 * @class Lomadee
 */
export default class Lomadee {
  /**
   * O código de afiliado da lomadee
   */
  private sourceId?:string;

  /**
   * Quantidade de itens que aparecem na página
   */
  protected itemsPerPage:number;

  /**
   * Construtor da classe
   *
   * @constructor
   */
  constructor() {
    this.sourceId = Auth.config().sourceId;
    this.itemsPerPage = 20;
  }

  /**
   * Constroi a requisição GET com alguns parâmetros que são necessários
   *
   * @param path        O caminho da requisição
   * @param queryParams A query string da requisição
   */
  protected get(path:string, queryParams:object): Promise<AxiosResponse> {
    const params = { ...queryParams, sourceId: this.sourceId };
    return Api.request().get(path, { params });
  }
}
