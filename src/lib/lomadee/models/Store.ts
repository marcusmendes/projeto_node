import { AxiosResponse } from 'axios';
import Lomadee from '../Lomadee';

/**
 * @class Store
 * @author Marcus <mendesxx.ti@hotmail.com>
 * @see https://developer.lomadee.com/afiliados/ofertas/recursos-v3/buscar-ofertas/
 */
class Store extends Lomadee {
  /**
   * Busca os dados dos lojistas parceiros, podendo ou não filtrar apenas
   * os lojistas que possuem ofertas
   *
   * @param categoryId Filtro por ID da categoria.
   * @param hasOffer   true|false. Quando "true" retorna a lista
   *                             de lojas que possuem ofertas em nosso banco de dados.
   */
  public getStores(categoryId?:number, hasOffer = true): Promise<AxiosResponse> {
    return this.get('/store/_all', { categoryId, hasOffer });
  }
}

export default new Store();
