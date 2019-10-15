import Lomadee from '../Lomadee';

class Offer extends Lomadee {
  search(keyword) {
    return this.get('/offer/_search', {
      keyword,
    });
  }
}

export default new Offer();
