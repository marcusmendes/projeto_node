class Pagination {
  constructor() {
    this.totalPerPage = 5;
  }

  async paginate(page, model, options) {
    options.limit = this.totalPerPage;
    options.offset = (page - 1) * this.totalPerPage;

    const totalItems = await model.count();
    const items = await model.findAll(options);
    const totalPages = Math.floor(totalItems / this.totalPerPage) + 1;

    return {
      items,
      totalItems,
      totalPerPage: this.totalPerPage,
      totalPages,
    };
  }
}

export default new Pagination();
