import { Request, Response } from 'express';
import Offer from '../../lib/lomadee/models/Offer';

class OfferController {
  public index(req: Request, res: Response): Response {
    return res.json({ message: 'OK' });
  }

  public async offer(req:Request, res:Response): Promise<Response> {
    const { offerId } = req.params;
    const { storeId } = req.query;

    try {
      const { data } = await Offer.getOffer(Number(offerId), storeId);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  public async search(req:Request, res:Response): Promise<Response> {
    const {
      keyword, categoryId, storeId, page, sort,
    } = req.query;

    try {
      const { data } = await Offer.search(keyword, categoryId, storeId, page, sort);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  public async offersOfCategory(req:Request, res:Response): Promise<Response> {
    const { categoryId } = req.params;
    const { storeId, page, sort } = req.query;

    try {
      const { data } = await Offer.getOffersOfCategory(Number(categoryId), storeId, page, sort);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  public async offersOfStore(req:Request, res:Response): Promise<Response> {
    const { storeId } = req.params;
    const { categoryId, page, sort } = req.query;

    try {
      const { data } = await Offer.getOffersOfStore(Number(storeId), categoryId, page, sort);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }
}

export default new OfferController();
