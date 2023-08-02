import { SubmitHandler, useForm } from 'react-hook-form';
import { TitleLogo } from '../../components/TitleLogo';
import { SectionTemplate } from '../../styles/SectionTemplate';
import { Main } from './styles';
import { Input } from '../../components/Inputs';
import loginSchema, { ILoginData } from './shema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonYellow } from '../../styles/Button';
import { api } from '../../services/api.service';
import { ITokenResponse } from '../../contexts/UserContext/types';
import { AxiosError } from 'axios';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginData>({
    resolver: zodResolver(loginSchema)
  });

  const submitLoginForm: SubmitHandler<ILoginData> = async (
    loginFormData: ILoginData
  ) => {
    try {
      const response = await api.post<ITokenResponse>('/login', loginFormData);
      console.log(response);
    } catch (error) {
      error as AxiosError<string>;
    }
  };
  return (
    <>
      <Main>
        <SectionTemplate>
          <TitleLogo />
          <div className='form__container'>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(submitLoginForm)}>
              <Input
                name={'email'}
                label={'E-mail'}
                placeholder={'Insira seu e-mail'}
                type={'text'}
                register={register('email')}
                errors={errors.email || undefined}
              />
              <Input
                name={'password'}
                label={'Senha'}
                placeholder={'Insira sua senha'}
                type={'password'}
                register={register('password')}
                errors={errors.password || undefined}
              />
              <ButtonYellow>Entrar</ButtonYellow>
            </form>
          </div>
        </SectionTemplate>
      </Main>
    </>
  );
};

export default LoginPage;
