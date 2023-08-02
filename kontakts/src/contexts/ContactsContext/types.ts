interface IContactFullName {
  id: number;
  fullName: string;
  createdAt: string;
}

interface IContactAddresses {
  id: number;
  street: string;
  number: string;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

interface IContactPhones {
  id: number;
  phone: string;
  createdAt: string;
}
interface IContactEmails {
  id: number;
  email: string;
  createdAt: string;
}

interface IContact {
  id: number;
  createdAt: string;
  fullName: IContactFullName;
  addresses: Array<IContactAddresses>;
  phones: Array<IContactPhones>;
  emails: Array<IContactEmails>;
}

interface IContactsContext {
  userContactsListFromApi: () => Promise<void>;
  contactsList: Array<IContact>;
}

export type { IContactFullName, IContact, IContactsContext };
