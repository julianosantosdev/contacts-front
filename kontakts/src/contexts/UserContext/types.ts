import { ReactNode } from 'react';

interface IUserProviderProps {
  children: ReactNode;
}

interface ITokenResponse {
  token: string;
}

export type { IUserProviderProps, ITokenResponse };
