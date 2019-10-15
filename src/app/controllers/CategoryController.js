import Category from '../../lib/lomadee/models/Category';

class CategoryController {
  async search(req, res) {
    const { keyword, storeId, hasOffer } = req.query;

    try {
      const { data } = await Category.search(keyword, storeId, hasOffer);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  async all(req, res) {
    const { storeId, hasOffer } = req.query;
    try {
      const { data } = await Category.getCategories(storeId, hasOffer);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }

  async category(req, res) {
    const { categoryId } = req.params;
    const { storeId } = req.query;

    try {
      const { data } = await Category.getCategory(categoryId, storeId);

      return res.json(data);
    } catch (err) {
      const { status, statusText } = err.response;
      return res.status(status).json({ error: statusText });
    }
  }
}

export default new CategoryController();
