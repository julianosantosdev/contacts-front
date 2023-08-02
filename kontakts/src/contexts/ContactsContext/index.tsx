import { createContext, useState } from 'react';
import { IProviderProps } from '../../types';
import { api } from '../../services/api.service';
import { AxiosError } from 'axios';
import { IAxiosErrorMessage } from '../UserContext/types';
import { toast } from 'react-toastify';
import { IContact, IContactsContext } from './types';

const ContactsContext = createContext<IContactsContext>({} as IContactsContext);

const ContactsProvider = ({ children }: IProviderProps) => {
  const [contactsList, setContactsList] = useState([] as Array<IContact>);

  const userContactsListFromApi = async () => {
    const token = localStorage.getItem('@KontaktsToken') || null;
    if (token !== null) {
      try {
        const contactsListRequest = await api.get<Array<IContact>>(
          '/contacts',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setContactsList(contactsListRequest.data);
        // setFilteredProducts(productsRequest.data);
      } catch (error) {
        const requestError = error as AxiosError<IAxiosErrorMessage>;
        toast.error(requestError.response?.data.message);
      }
    }
  };

  return (
    <ContactsContext.Provider value={{ userContactsListFromApi, contactsList }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
