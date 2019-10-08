class DefaultController {
  index(req, res) {
    const data = req.query;
    return res.json({ message: 'Index', request: data });
  }
}

export default new DefaultController();
