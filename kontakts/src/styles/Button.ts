import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const genericButton = css`
  height: 3rem;
  color: var(--color-grey-0);
  background-color: var(--color-grey-1);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: none;
  transition: 300ms;
`;

const Button = styled.button`
  ${genericButton}
`;

const ButtonYellow = styled(Button)`
  background-color: var(--color-primary);
  color: var(--color-grey-4);
  &:hover {
    background-color: var(--color-primary-focus);
  }
`;

const ButtonGray = styled(Button)`
  background-color: var(--color-grey-3);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  &:hover {
    background-color: var(--color-grey-1);
  }
`;

const LinkStyledtoRegister = styled(Link)`
  ${genericButton};
  width: 100%;
  height: 3rem;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;

const LinkStyledToLogin = styled(Link)`
  ${genericButton}
  width: 25%;
  font-size: var(--font-size-2);
  &:hover {
    background-color: var(--color-grey-2);
  }
`;

export {
  Button,
  ButtonYellow,
  ButtonGray,
  LinkStyledtoRegister,
  LinkStyledToLogin
};
