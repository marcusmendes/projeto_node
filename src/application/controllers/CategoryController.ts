import { Request, Response } from 'express';
import Category from '../../lib/lomadee/models/Category';

class CategoryController {
  public async search(req:Request, res:Response): Promise<Response> {
    const { keyword, storeId, hasOffer } = req.query;

    try {
      const { data } = await Category.search(keyword, storeId, hasOffer);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  public async all(req:Request, res:Response): Promise<Response> {
    const { storeId, hasOffer } = req.query;
    try {
      const { data } = await Category.getCategories(storeId, hasOffer);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  public async category(req:Request, res:Response): Promise<Response> {
    const { categoryId } = req.params;
    const { storeId } = req.query;

    try {
      const { data } = await Category.getCategory(Number(categoryId), storeId);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }
}

export default new CategoryController();
