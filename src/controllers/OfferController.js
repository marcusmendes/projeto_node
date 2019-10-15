import Offer from '../lib/lomadee/models/Offer';

class OfferController {
  index(req, res) {
    return res.json({ message: 'OK' });
  }

  async offer(req, res) {
    const { offerId } = req.params;
    const { storeId } = req.query;

    try {
      const { data } = await Offer.getOffer(offerId, storeId);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  async search(req, res) {
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

  async offersOfCategory(req, res) {
    const { categoryId } = req.params;
    const { storeId, page, sort } = req.query;

    try {
      const { data } = await Offer.getOffersOfCategory(categoryId, storeId, page, sort);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  async offersOfStore(req, res) {
    const { storeId } = req.params;
    const { categoryId, page, sort } = req.query;

    try {
      const { data } = await Offer.getOffersOfStore(storeId, categoryId, page, sort);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }
}

export default new OfferController();
