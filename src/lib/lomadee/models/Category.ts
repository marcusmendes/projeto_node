import { AxiosResponse } from 'axios';
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
   * @param keyword   Palavra-chave
   * @param storeId   ID de loja.
   * @param hasOffer  true|false. Quando "true" retorna apenas
   *                            categorias que possuem ofertas.
   */
  public search(keyword:string, storeId?:number, hasOffer = true): Promise<AxiosResponse> {
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
   * @param storeId   ID de loja.
   * @param hasOffer  true|false. Quando "true" retorna apenas
   *                            categorias que possuem ofertas.
   */
  public getCategories(storeId?:number, hasOffer = true): Promise<AxiosResponse> {
    return this.get('/category/_all', { storeId, hasOffer });
  }

  /**
   * Busca uma categoria específica pelo seu ID
   *
   * @param categoryId ID da categoria.
   * @param storeId    ID de loja.
   */
  public getCategory(categoryId:number, storeId?:number): Promise<AxiosResponse> {
    return this.get(`/category/_id/${categoryId}`, { storeId });
  }
}

export default new Category();
