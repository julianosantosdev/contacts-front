import { createContext, useState } from 'react';
import { iModalContext, iModalContextProps } from './types';

const ModalContext = createContext<iModalContext>({} as iModalContext);

const ModalProvider = ({ children }: iModalContextProps) => {
  const [showModal, setShowModal] = useState<null | string>(null);

  const handleCloseModal = () => {
    setShowModal(null);
  };

  const handleShowModal = (type: string | null) => {
    setShowModal(type);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        handleShowModal,
        handleCloseModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
