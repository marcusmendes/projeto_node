import Store from '../../lib/lomadee/models/Store';

class StoreController {
  async all(req, res) {
    const { categoryId, hasOffer } = req.query;

    try {
      const { data } = await Store.getStores(categoryId, hasOffer);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }
}

export default new StoreController();
