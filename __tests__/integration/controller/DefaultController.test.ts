import request from 'supertest';
import app from '../../../src/app';
import '../../test';

describe('DefaultController', () => {
  it('deve retornar a versão da api', async () => {
    const res = await request(app)
      .get('/');

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({ message: 'API 1.0' });
  });
});
