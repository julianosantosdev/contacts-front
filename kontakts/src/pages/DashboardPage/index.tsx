import { useContext, useEffect } from 'react';
import { ContactsContext } from '../../contexts/ContactsContext';
import { Container, Header, SectionDashBoard } from './styles';
import { TitleLogo } from '../../components/TitleLogo';
import { ButtonGray } from '../../styles/Button';
import { UserContext } from '../../contexts/UserContext';
import { ICreateUserRespose } from '../../contexts/UserContext/types';
import { CardsList } from '../../components/Contacts/ContactsList';

const DashboardPage = () => {
  const { userContactsListFromApi } = useContext(ContactsContext);
  const { handleLogout } = useContext(UserContext);
  const user: ICreateUserRespose = JSON.parse(
    localStorage.getItem('@KontaktsUserData') || '{}'
  );

  useEffect(() => {
    userContactsListFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header>
        <Container>
          <nav>
            <TitleLogo />
            <ButtonGray className='font-size-1' onClick={handleLogout}>
              Sair
            </ButtonGray>
          </nav>
        </Container>

        <div className='header__userInfo'>
          <Container>
            <div className='dashboard__userDetails'>
              <h2>Bem-vindo, {user.fullName}</h2>
              <p className='font-size-2 font-color-gray-1'>{`Usuário desde ${user.createdAt}`}</p>
              <ButtonGray className='font-size-2 font-color-gray-0'>
                Editar Perfil
              </ButtonGray>
            </div>
          </Container>
        </div>
      </Header>

      <main>
        <Container>
          <SectionDashBoard>
            <CardsList />
          </SectionDashBoard>
        </Container>
      </main>
    </>
  );
};

export default DashboardPage;
