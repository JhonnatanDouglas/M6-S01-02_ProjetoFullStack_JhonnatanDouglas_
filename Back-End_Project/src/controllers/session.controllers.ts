import { Request, Response } from 'express';
import { SessionService } from '../services/login.services';
import { TLoginRequest } from '../interfaces/login.interfaces';
import { userRepository } from '../repositories';
import { TUser, TUserResponse } from '../interfaces/users.interfaces';
import { userSchemaResponse } from '../schemas/users.schemas';

class SessionController {
  constructor(private sessionService: SessionService) {}

  async login(req: Request, res: Response) {
    const { email, password }: TLoginRequest = req.body;
    const token: string = await this.sessionService.create({ email, password });

    const userFounded: TUser | null = await userRepository.findOne({
      where: { email },
    });

    const userData: TUserResponse = userSchemaResponse.parse(userFounded);

    return res.status(200).json({ token: token, user: userData });
  }
}

export { SessionController };
