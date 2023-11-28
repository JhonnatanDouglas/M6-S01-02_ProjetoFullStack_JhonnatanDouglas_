import { createContext, useEffect, useState } from "react";
import { IChildren, ILogin, IRegister, IRegisterResponse, IUserConfigs } from "../../interfaces/componentsInterfaces";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserContext } from "../../interfaces/userContextInterfaces.ts";

const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IChildren) => {
  const [isLoadingUser, setIsLoadingUser] = useState<boolean>(false);
  const [loadContacts, setIsLoadingContacts] = useState<boolean>(false);
  const [userData, setUserData] = useState<IRegisterResponse>({
    id: "",
    name: "",
    email: "",
    telephone: "",
    register_date: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const userId: string | null = localStorage.getItem("@USERID");

    if (token && userId) {
      userLoadProfile();
      setIsLoadingContacts(true);
    }
  }, [isLoadingUser]);

  const userRegister = async (userRegisterData: IRegister) => {
    try {
      const { status } = await api.post("/users", userRegisterData);

      if (status !== 201) {
        toast.error("Não foi possivel carregar informações de registro.");
        return;
      }

      toast.success("Cadastro efetuado com sucesso.");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível efetuar o registro.");
    }
  };

  const userLogin = async (userLoginData: ILogin) => {
    try {
      setIsLoadingUser(true);
      const { data, status } = await api.post("/login", userLoginData);

      if (status !== 200) {
        toast.error("Não foi possível carregar informações de login.");
        return;
      }

      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      localStorage.setItem("@USERLOGGED", JSON.stringify(true));

      setUserData(data.user);
      await userLoadProfile();

      toast.success("Login efetuado com sucesso.");

      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível efetuar o login.");
    } finally {
      setIsLoadingUser(false);
    }
  };

  const userLoggout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    localStorage.removeItem("@CONTACTID");
    localStorage.removeItem("@USERLOGGED");
    navigate("/");
  };

  const userLoadProfile = async () => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const userId: string | null = localStorage.getItem("@USERID");

    try {
      if (!token) {
        toast.error("Token inválido.");
        return;
      }
      if (!userId) {
        toast.error("UserID inválido.");
        return;
      }

      const { data, status } = await api.get(`/users/${userId}`, { headers: { Authorization: `Bearer ${token}` } });

      if (status !== 200) {
        toast.error("Não foi possível carregar o usuário.");
        return;
      }

      setUserData(data);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível carregar as informações de usuário.");
    }
  };

  const userUpdate = async (userUpdateData: IUserConfigs) => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const userId: string | null = localStorage.getItem("@USERID");

    if (Object.keys(userUpdateData).length !== 0) {
      try {
        setIsLoadingUser(true);
        if (!token) {
          toast.error("Token inválido.");
          return;
        }
        if (!userId) {
          toast.error("UserID inválido.");
          return;
        }

        const { data, status } = await api.patch(`/users/${userId}`, userUpdateData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (status !== 201) {
          toast.error("Não foi possível atualizar o usuário.");
          return;
        }

        toast.success("Atualizado com sucesso.");
        setUserData(data);
      } catch (error) {
        console.error(error);
        toast.error("Não foi possível carregar as informações atualizadas do usuário.");
      } finally {
        setIsLoadingUser(false);
      }
    }
  };

  const userDelete = async () => {
    const token: string | null = localStorage.getItem("@TOKEN");
    const userId: string | null = localStorage.getItem("@USERID");

    try {
      if (!token) {
        toast.error("Token inválido.");
        return;
      }
      if (!userId) {
        toast.error("UserID inválido.");
        return;
      }

      const { status } = await api.delete(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (status !== 204) {
        toast.error("Não foi possível deletar o usuário.");
        return;
      }

      toast.success("Conta deletada com sucesso.");

      setTimeout(() => {
        userLoggout();
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível carregar as informações do usuário.");
    }
  };

  return (
    <UserContext.Provider
      value={{
        isLoadingUser,
        userData,
        loadContacts,
        userRegister,
        userLogin,
        userLoggout,
        userLoadProfile,
        userUpdate,
        userDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
