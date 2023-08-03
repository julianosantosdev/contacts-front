import { useContext } from 'react';
import { ContactsContext } from '../../../contexts/ContactsContext';
import { ButtonYellow } from '../../../styles/Button';
import { ModalContext } from '../../../contexts/ModalContext';
import ContactDetails from './styles';

const ShowContact = () => {
  const { contactDetails, handleDeleteContact } = useContext(ContactsContext);
  const { handleShowModal, handleCloseModal } = useContext(ModalContext);

  const { fullName, emails, phones, addresses, createdAt } = contactDetails;
  return (
    <>
      <ContactDetails>
        <h3>Nome: {fullName.fullName}</h3>
        <p>Telefone: {phones[0].phone}</p>
        <ButtonYellow
          onClick={() => handleShowModal('editContact')}
          className='button__create'
          type='button'
        >
          Editar
        </ButtonYellow>

        <ButtonYellow
          onClick={() => {
            handleDeleteContact(), handleCloseModal();
          }}
          className='button__create'
          type='button'
        >
          Deletar
        </ButtonYellow>
      </ContactDetails>
    </>
  );
};

export { ShowContact };
