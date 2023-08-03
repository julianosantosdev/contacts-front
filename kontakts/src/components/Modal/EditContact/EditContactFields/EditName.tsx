import { useForm } from 'react-hook-form';
import { Button } from '../../../../styles/Button';
import { Input } from '../../../Inputs';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContext } from 'react';
import { ContactsContext } from '../../../../contexts/ContactsContext';

const fullNameSchema = z.object({
  fullName: z.string().max(50).nonempty('Campo obrigatório')
});
export type IFullName = z.infer<typeof fullNameSchema>;

const EditName = () => {
  const { contactDetails, handleUpdateContactName } =
    useContext(ContactsContext);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFullName>({
    resolver: zodResolver(fullNameSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit(handleUpdateContactName)}>
        <Input
          name={'fullName'}
          label={'Nome'}
          placeholder={contactDetails.fullName.fullName}
          type={'text'}
          register={register('fullName')}
          errors={errors.fullName || undefined}
        />
        <Button className='button__create' type='submit'>
          Salvar
        </Button>
      </form>
    </>
  );
};

export { EditName };
