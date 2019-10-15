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
   * @param {integer} offerId ID da oferta (SKU).
   * @param {integer} storeId ID de loja.
   */
  getOffer(offerId, storeId) {
    return this.get(`/offer/_id/${offerId}`, { storeId });
  }

  /**
   * Busca por uma oferta em uma determinada categoria
   *
   * @param {string} keyword      O termo da busca
   * @param {integer} categoryId  Id da categoria
   * @param {integer} storeId     Id da loja (opcional)
   * @param {integer} page        O número da página para paginação
   * @param {string} sort         A ordernação (opcional):
   *                                - rating (default) - Ordena por melhor avaliação
   *                                - price - Ordena por menor preço
   */
  search(keyword, categoryId, storeId = '', page = 1, sort = 'rating') {
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
   * @param {integer} categoryId  Id da categoria
   * @param {integer} storeId     Id da loja (opcional)
   * @param {integer} page        O número da página para paginação
   * @param {string} sort         A ordernação (opcional):
   *                                - rating (default) - Ordena por melhor avaliação
   *                                - price - Ordena por menor preço
   */
  getOffersOfCategory(categoryId, storeId = '', page = 1, sort = 'rating') {
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
   * @param {integer} storeId     ID de loja.
   * @param {integer} categoryId  ID da categoria (opcional).
   * @param {integer} page        O número da página para paginação
   * @param {string} sort         A ordernação (opcional):
   *                                - rating (default) - Ordena por melhor avaliação
   *                                - price - Ordena por menor preço
   */
  getOffersOfStore(storeId, categoryId = '', page = 1, sort = 'rating') {
    return this.get(`/offer/_store/${storeId}`, {
      categoryId,
      page,
      sort,
      size: this.itemsPerPage,
    });
  }
}

export default new Offer();
