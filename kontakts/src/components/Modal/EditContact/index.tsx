import { EditContactEmail } from './EditContactFields/EditEmail';
import { EditContactName } from './EditContactFields/EditName';
import { EditContactPhone } from './EditContactFields/EditPhone';
import StyledSection from './styles';

const EditContact = () => {
  return (
    <>
      <StyledSection>
        <EditContactName />
        <EditContactEmail />
        <EditContactPhone />
      </StyledSection>
    </>
  );
};

export { EditContact };
