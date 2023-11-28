import { z } from 'zod';
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdate,
  usersSchemaResponse,
} from '../schemas/users.schemas';
import { DeepPartial } from 'typeorm';

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>;
type TUserUpdateRequest = DeepPartial<typeof userSchemaUpdate>;

interface UpdateUser {
  name: string;
  email: string;
  password: string;
  telephone: string;
}

type TUserUpdateChecked = DeepPartial<UpdateUser>;

export {
  TUser,
  TUserRequest,
  TUserResponse,
  TUsersResponse,
  TUserUpdateRequest,
  TUserUpdateChecked,
};
