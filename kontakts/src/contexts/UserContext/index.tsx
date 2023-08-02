import { createContext } from 'react';
import {
  IAxiosErrorMessage,
  ICreateUserRespose,
  ITokenResponse,
  IUserContext
} from './types';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import { api } from '../../services/api.service';
import { ILoginData } from '../../pages/LoginPage/shema';
import { SubmitHandler } from 'react-hook-form';
import { IProviderProps } from '../../types';
import { toast } from 'react-toastify';
import { IRegisterData } from '../../pages/RegisterPage/schema';

const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IProviderProps) => {
  const navigate = useNavigate();

  const submitRegisterForm: SubmitHandler<IRegisterData> = async (
    loginFormData: IRegisterData
  ) => {
    try {
      const registerResponse: AxiosResponse =
        await api.post<ICreateUserRespose>('/users', loginFormData);

      if (registerResponse.status === 201) {
        toast.success('Usuário criado com sucesso!');
      }
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      const requestError = error as AxiosError<IAxiosErrorMessage>;
      toast.error(requestError.response?.data.message);
    }
  };

  const submitLoginForm: SubmitHandler<ILoginData> = async (
    loginFormData: ILoginData
  ) => {
    try {
      const loginResponse: AxiosResponse = await api.post<ITokenResponse>(
        '/login',
        loginFormData
      );

      const token: string = loginResponse.data.token || undefined;

      if (loginResponse.status === 200) {
        const userDataRequest = await api.get('/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        localStorage.setItem(
          '@KontaktsUserData',
          JSON.stringify(userDataRequest.data)
        );
        toast.success('Você está logado');
      }
      localStorage.setItem('@KontaktsToken', token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      const requestError = error as AxiosError<IAxiosErrorMessage>;
      toast.error(requestError.response?.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('@KontaktsUserData');
    localStorage.removeItem('@KontaktsToken');

    navigate('/login');
    toast.success('Logout realizado com sucesso!');
  };

  return (
    <UserContext.Provider
      value={{
        submitLoginForm,
        submitRegisterForm,
        handleLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
