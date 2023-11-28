import { compare } from 'bcryptjs';
import { AppError } from '../errors/App.error';
import { TLoginRequest } from '../interfaces/login.interfaces';
import { userRepository } from '../repositories';
import { sign } from 'jsonwebtoken';
import { TUser } from '../interfaces/users.interfaces';

class SessionService {
  async create({ email, password }: TLoginRequest): Promise<string> {
    const userFounded: TUser | null = await userRepository.findOne({
      where: { email },
    });

    if (!userFounded) throw new AppError('Invalid credentials.', 401);

    const passwordIsTheSame: boolean = await compare(
      password,
      userFounded.password
    );

    if (!passwordIsTheSame) throw new AppError('Invalid credentials.', 401);

    const token: string = sign(
      { userName: userFounded.name },
      process.env.SECRET_KEY!,
      { expiresIn: '1h', subject: userFounded.id }
    );

    return token;
  }
}

export { SessionService };
