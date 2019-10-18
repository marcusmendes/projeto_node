import request from 'supertest';
import app from '../../../src/app';
import '../../test';
import User from '../../../src/application/schemas/User';

describe('UserController', () => {
  it('deve criar um usuário', async () => {
    const res = await request(app)
      .post('/user')
      .send({
        name: 'Marcus Mendes Maciel',
        email: 'mendesxx.ti@hotmail.com',
        password: '123456',
        role: 'admin',
      });

    expect(res.body).toHaveProperty('email');
  });

  it('deve gerar error de "usuário já cadastrado" ao criar um usuário', async () => {
    const user = {
      name: 'João',
      email: 'joao@teste.com',
      password: '123456',
      role: 'admin',
    };

    User.create(user);

    const res = await request(app)
      .post('/user')
      .send(user);

    expect(res.status).toEqual(400);
    expect(res.body).toHaveProperty('error', 'User already registered!');
  });
});
