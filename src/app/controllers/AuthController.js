import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../schemas/User';
import authConfig from '../../config/auth';

class AuthController {
  async authenticate(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not found!' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { _id, name } = user;
    const token = jwt.sign({ id: _id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({
      user: {
        id: _id,
        name,
        email,
      },
      token,
    });
  }
}

export default new AuthController();
