import Lomadee from '../Lomadee';

/**
 * @class Category
 * @author Marcus <mendesxx.ti@hotmail.com>
 * @see https://developer.lomadee.com/afiliados/ofertas/recursos-v3/buscar-categorias/
 */
class Category extends Lomadee {
  /**
   * Busca por categorias através de palavras.
   *
   * @param {string} keyword    Palavra-chave
   * @param {integer} storeId   ID de loja.
   * @param {integer} hasOffer  true|false. Quando "true" retorna apenas
   *                            categorias que possuem ofertas.
   */
  search(keyword, storeId = '', hasOffer = true) {
    return this.get('/category/_search', {
      keyword,
      storeId,
      hasOffer,
      size: this.itemsPerPage,
    });
  }

  /**
   * Retorna a lista de todas as categorias que possuem ofertas
   *
   * @param {integer} storeId   ID de loja.
   * @param {boolean} hasOffer  true|false. Quando "true" retorna apenas
   *                            categorias que possuem ofertas.
   */
  getCategories(storeId = '', hasOffer = true) {
    return this.get('/category/_all', { storeId, hasOffer });
  }

  /**
   * Busca uma categoria específica pelo seu ID
   *
   * @param {integer} categoryId ID da categoria.
   * @param {integer} storeId    ID de loja.
   */
  getCategory(categoryId, storeId = '') {
    return this.get(`/category/_id/${categoryId}`, { storeId });
  }
}

export default new Category();
