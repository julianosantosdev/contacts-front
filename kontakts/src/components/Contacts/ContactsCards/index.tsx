import { ContactCardLi } from './styles';
import { FC } from 'react';

interface IContactCardProps {
  id: number;
  fullName: string;
  createdAt: string;
}

const ContactCard: FC<IContactCardProps> = ({ fullName, createdAt }) => {
  //   const {handleModal } = useContext(ModalContext)
  //   const {getTechDetails} = useContext(TechContext)

  return (
    <ContactCardLi
      onClick={() => {
        //   handleModal("edit")
        //   getTechDetails(techName)
      }}
    >
      <h3>{fullName}</h3>
      <p className='font-color-gray-1 font-size-3'>{`Criação: ${createdAt}`}</p>
    </ContactCardLi>
  );
};

export { ContactCard };
