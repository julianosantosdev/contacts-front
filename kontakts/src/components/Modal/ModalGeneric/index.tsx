import { ModalContainer } from './styles';
import { IGenericModalProps } from '../../../contexts/ModalContext/types';
import { ModalHeader } from '../Header';
import { EditUser } from '../EditUser';
import { CreateContact } from '../CreateContact';
import { useContext } from 'react';
import { ContactsContext } from '../../../contexts/ContactsContext';
import { ShowContact } from '../ShowContact';
import { EditContact } from '../EditContact';

const GenericModal = ({ type }: IGenericModalProps) => {
  const { contactDetails } = useContext(ContactsContext);
  // const { ref } = useContext(ModalContext);
  return (
    <ModalContainer>
      <div className='modalBody slideDown'>
        {(() => {
          switch (type) {
            case 'edit':
              return (
                <>
                  <ModalHeader title={'Editar Usuário'} />
                  <EditUser />
                </>
              );

            case 'create':
              return (
                <>
                  <ModalHeader title={'Novo Kontato'} />
                  <CreateContact />
                </>
              );
            case 'showContact':
              return (
                <>
                  <ModalHeader title={contactDetails.fullName.fullName} />
                  <ShowContact />
                </>
              );
            case 'editContact':
              return (
                <>
                  <ModalHeader title={contactDetails.fullName.fullName} />
                  <EditContact />
                </>
              );
            default:
              return null;
          }
        })()}
      </div>
    </ModalContainer>
  );
};

export { GenericModal };