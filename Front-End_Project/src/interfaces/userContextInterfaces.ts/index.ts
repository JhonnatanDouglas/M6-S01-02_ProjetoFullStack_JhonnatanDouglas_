import { IRegisterResponse, IRegister, ILogin, IUserConfigs } from "../componentsInterfaces";

interface IUserContext {
  isLoadingUser: boolean;
  userData: IRegisterResponse;
  loadContacts: boolean;
  userRegister: (userRegisterData: IRegister) => Promise<void>;
  userLogin: (userLoginData: ILogin) => Promise<void>;
  userLoggout: () => void;
  userLoadProfile: () => Promise<void>;
  userUpdate: (userUpdateData: IUserConfigs) => Promise<void>;
  userDelete: () => Promise<void>;
}

export type { IUserContext };
