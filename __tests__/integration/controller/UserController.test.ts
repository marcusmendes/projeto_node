import request from 'supertest';
import app from '../../../src/app';

describe('UserController', () => {
  it('deve criar um usuário', async () => {
    const res = await request(app)
      .post('/user')
      .send({
        name: 'Marcus Mendes Maciel',
        email: 'mendesxx.ti@hotmail.com',
        password: '123456',
        role: 'admin',
      })
      .expect(200);
  });

  expect().toHaveProperty('email');
});
