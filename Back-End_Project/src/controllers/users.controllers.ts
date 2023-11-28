import { Request, Response } from 'express';
import { UsersService } from '../services/users.services';
import {
  TUserRequest,
  TUserResponse,
  TUserUpdateChecked,
  TUsersResponse,
} from '../interfaces/users.interfaces';

class UsersControllers {
  constructor(private userService: UsersService) {}

  async create(req: Request, res: Response) {
    const { name, email, password, telephone }: TUserRequest = req.body;
    const newUser: TUserResponse = await this.userService.create({
      name,
      email,
      password,
      telephone,
    });

    return res.status(201).json(newUser);
  }

  async list(_: Request, res: Response) {
    const usersList: TUsersResponse = await this.userService.list();

    return res.status(200).json(usersList);
  }

  async retrieve(req: Request, res: Response) {
    const userId: string = req.params.userId;
    console.log(req.params.userId);
    const userFounded: TUserResponse = await this.userService.retrieve(userId);

    return res.status(200).json(userFounded);
  }

  async update(req: Request, res: Response) {
    const userId: string = req.params.userId;
    const newUser: TUserUpdateChecked = req.body;

    const updatedUser = await this.userService.update(newUser, userId);

    return res.status(201).json(updatedUser);
  }

  async remove(req: Request, res: Response) {
    const userId: string = req.params.userId;
    await this.userService.remove(userId);

    return res.status(204).json();
  }
}

export { UsersControllers };
