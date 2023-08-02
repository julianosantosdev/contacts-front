import styled from 'styled-components';

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: var(--color-grey-0);
    font-size: var(--font-size-2);
  }

  input {
    height: 3rem;
    background-color: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    color: var(--color-grey-0);
    border-radius: 4px;
    padding: 0.25rem 1rem;
    outline: none;
    transition: 300ms;
    box-sizing: border-box;
    font-family: var(--font-nunito);
    font-size: var(--font-size-0);
    :disabled {
      background-color: red;
    }


    &:focus {
      border: 1px solid var(--color-grey-0);
      transition: 300ms;
    }
  }
`;

export { Fieldset };
