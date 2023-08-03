import { ModalContainer } from './styles';
import { IGenericModalProps } from '../../../contexts/ModalContext/types';
import { ModalHeader } from '../Header';
import { EditUser } from '../EditUser';

const GenericModal = ({ type }: IGenericModalProps) => {
  // const { ref } = useContext(ModalContext);
  return (
    <ModalContainer>
      <div className='modalBody'>
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
                  {/* <CreateTechForm /> */}
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
