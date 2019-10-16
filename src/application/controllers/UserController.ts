import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../schemas/User';

class UserController {
  public async store(req:Request, res:Response): Promise<Response> {
    const {
      name, email, password, role,
    } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json('User already registered!');
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
      role,
    });

    return res.json(newUser);
  }
}

export default new UserController();
