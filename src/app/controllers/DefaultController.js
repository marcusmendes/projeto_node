class DefaultController {
  index(req, res) {
    return res.json({ message: 'API 1.0' });
  }
}

export default new DefaultController();
