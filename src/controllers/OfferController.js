import Offer from '../lib/lomadee/models/Offer';

class OfferController {
  index(req, res) {
    return res.json({ message: 'OK' });
  }

  async search(req, res) {
    const { keyword } = req.query;

    const { data } = await Offer.search(keyword);

    return res.json(data);
  }
}

export default new OfferController();
