import { hash } from 'bcryptjs';
import { AppError } from '../errors/App.error';
import {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdateChecked,
  TUsersResponse,
} from '../interfaces/users.interfaces';
import { userRepository } from '../repositories';
import {
  userSchemaResponse,
  usersSchemaResponse,
} from '../schemas/users.schemas';
import { User } from '../entities/user.entitie';

class UsersService {
  async create({
    name,
    email,
    password,
    telephone,
  }: TUserRequest): Promise<TUserResponse> {
    const userAlreadyExists: TUser | null = await userRepository.findOne({
      where: { email },
    });
    if (userAlreadyExists) throw new AppError('User already exists.', 409);

    const hashedPassword: string = await hash(password, 10);
    const user: TUser = userRepository.create({
      name,
      email,
      password: hashedPassword,
      telephone,
    });

    await userRepository.save(user);
    return userSchemaResponse.parse(user);
  }

  async list(): Promise<TUsersResponse> {
    const users: TUser[] = await userRepository.find();

    return usersSchemaResponse.parse(users);
  }

  async retrieve(userId: string): Promise<TUserResponse> {
    const user: TUser | null = await userRepository.findOne({
      where: { id: userId },
    });

    if (!user) throw new AppError('User not found.', 404);

    return userSchemaResponse.parse(user);
  }

  async update(
    newUser: TUserUpdateChecked,
    userId: string
  ): Promise<TUserResponse> {
    const lastUser: User | null = await userRepository.findOneBy({
      id: userId,
    });

    if (!lastUser) throw new AppError('User not found.', 404);

    if (newUser.email) {
      const emailAlreadyExists: User | null = await userRepository.findOne({
        where: { email: newUser.email },
      });

      if (emailAlreadyExists) throw new AppError('Email already exists.', 403);
    }

    if (newUser.password) {
      newUser.password = await hash(newUser.password, 10);
    } else {
      newUser.password = lastUser.password;
    }

    const user: TUser = userRepository.create({ ...lastUser, ...newUser });

    await userRepository.save(user);
    return userSchemaResponse.parse(user);
  }

  async remove(userId: string): Promise<void> {
    const user: User | null = await userRepository.findOneBy({
      id: userId,
    });

    if (!user) throw new AppError('User not found.', 404);

    await userRepository.remove(user);
  }
}

export { UsersService };
