import { UserProvider } from '../contexts/UserContext';
import { IProviderProps } from '../types';

const Providers = ({ children }: IProviderProps) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
