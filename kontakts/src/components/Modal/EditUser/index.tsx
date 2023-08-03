import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../Inputs';
import { ButtonYellow } from '../../../styles/Button';
import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { useForm } from 'react-hook-form';
import UpdateUserSchema, { IUpdataUserData } from './updateUserSchema';

function EditUser() {
  // const { techDetails, submitTechChanges, levelToSelect, deleteUserTech } =
  //   useContext(TechContext);
  // const { title } = techDetails;
  const { handlePatchUser, handleDeleteUser, userData } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUpdataUserData>({
    resolver: zodResolver(UpdateUserSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handlePatchUser)}>
        <Input
          name={'fullName'}
          label={'Nome'}
          placeholder={userData.fullName}
          type={'text'}
          register={register('fullName')}
          errors={errors.fullName || undefined}
        />
        <Input
          name={'email'}
          label={'E-mail'}
          placeholder={userData.email}
          type={'text'}
          register={register('email')}
          errors={errors.email || undefined}
        />
        <Input
          name={'phone'}
          label={'Telefone'}
          placeholder={userData.phone}
          type={'text'}
          register={register('phone')}
          errors={errors.phone || undefined}
        />
        <div className='form__buttonsContainer'>
          <ButtonYellow type='submit'>Salvar</ButtonYellow>
          <ButtonYellow type='button' onClick={handleDeleteUser}>
            Delete
          </ButtonYellow>
        </div>
      </form>
    </>
  );
}

export { EditUser };
