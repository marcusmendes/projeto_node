import { AxiosResponse } from 'axios';
import Lomadee from '../Lomadee';

/**
 * @class Offer
 * @author Marcus <mendesxx.ti@hotmail.com>
 * @see https://developer.lomadee.com/afiliados/ofertas/recursos-v3/buscar-ofertas/
 */
class Offer extends Lomadee {
  /**
   * Busca uma oferta específica através do SKU e do ID da loja.
   *
   * @param offerId ID da oferta (SKU).
   * @param storeId ID de loja.
   */
  public getOffer(offerId:number, storeId?:number): Promise<AxiosResponse> {
    return this.get(`/offer/_id/${offerId}`, { storeId });
  }

  /**
   * Busca por uma oferta em uma determinada categoria
   *
   * @param keyword     O termo da busca
   * @param categoryId  Id da categoria
   * @param storeId     Id da loja (opcional)
   * @param page        O número da página para paginação
   * @param sort        A ordernação (opcional):
   *                                - rating (default) - Ordena por melhor avaliação
   *                                - price - Ordena por menor preço
   */
  public search(keyword:string, categoryId:number, storeId?:number, page = 1, sort = 'rating'): Promise<AxiosResponse> {
    return this.get('/offer/_search', {
      keyword,
      categoryId,
      storeId,
      page,
      sort,
      size: this.itemsPerPage,
    });
  }

  /**
   * Busca ofertas de uma determinada categoria
   *
   * @param categoryId  Id da categoria
   * @param storeId     Id da loja (opcional)
   * @param page        O número da página para paginação
   * @param sort        A ordernação (opcional):
   *                                - rating (default) - Ordena por melhor avaliação
   *                                - price - Ordena por menor preço
   */
  public getOffersOfCategory(categoryId:number, storeId?:number, page = 1, sort = 'rating'): Promise<AxiosResponse> {
    return this.get(`/offer/_category/${categoryId}`, {
      storeId,
      page,
      sort,
      size: this.itemsPerPage,
    });
  }

  /**
   * Busca todas as ofertas de uma loja específica.
   *
   * @param storeId     ID de loja.
   * @param categoryId  ID da categoria (opcional).
   * @param page        O número da página para paginação
   * @param sort        A ordernação (opcional):
   *                                - rating (default) - Ordena por melhor avaliação
   *                                - price - Ordena por menor preço
   */
  public getOffersOfStore(storeId:number, categoryId?:number, page = 1, sort = 'rating'): Promise<AxiosResponse> {
    return this.get(`/offer/_store/${storeId}`, {
      categoryId,
      page,
      sort,
      size: this.itemsPerPage,
    });
  }
}

export default new Offer();
