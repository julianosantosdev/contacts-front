import { ContactsProvider } from '../contexts/ContactsContext';
import { UserProvider } from '../contexts/UserContext';
import { IProviderProps } from '../types';

const Providers = ({ children }: IProviderProps) => {
  return (
    <UserProvider>
      <ContactsProvider>{children}</ContactsProvider>
    </UserProvider>
  );
};

export default Providers;
