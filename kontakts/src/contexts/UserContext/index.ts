import { createContext } from 'react';
import { IUserProviderProps } from './types';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext({});

const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
};
