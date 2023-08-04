import { useContext } from 'react';
import { ContactsContext } from '../../../../contexts/ContactsContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../../../Inputs';
import { Button } from '../../../../styles/Button';

const updateContactEmailSchema = z.object({
  email: z.string().email('Informe um email válido')
});
export type IContactEmail = z.infer<typeof updateContactEmailSchema>;

const EditContactEmail = () => {
  const { contactDetails, handleUpdateContactEmail } =
    useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IContactEmail>({
    resolver: zodResolver(updateContactEmailSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateContactEmail)}>
        <Input
          name={'email'}
          label={'E-mail'}
          placeholder={contactDetails.emails[0].email}
          type={'text'}
          register={register('email')}
          errors={errors.email || undefined}
        />
        <Button className='button__create' type='submit'>
          Salvar
        </Button>
      </form>
    </>
  );
};

export { EditContactEmail };
