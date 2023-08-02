import { SubmitHandler } from 'react-hook-form';
import { ILoginData } from '../../pages/LoginPage/shema';
import { IRegisterData } from '../../pages/RegisterPage/schema';

interface ITokenResponse {
  token: string;
}

interface ICreateUserRespose {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

interface IUserContext {
  submitLoginForm: SubmitHandler<ILoginData>;
  submitRegisterForm: SubmitHandler<IRegisterData>;
  handleLogout: () => void;
}

interface IAxiosErrorMessage {
  message: string;
}

export type {
  ITokenResponse,
  ICreateUserRespose,
  IUserContext,
  IAxiosErrorMessage
};
