import { EditName } from './EditContactFields/EditName';
import StyledSection from './styles';

const EditContact = () => {
  // const { techDetails, submitTechChanges, levelToSelect, deleteUserTech } =
  //   useContext(TechContext);
  // const { title } = techDetails;
  return (
    <>
      <StyledSection>
        <EditName />
      </StyledSection>
    </>
  );
};

export { EditContact };
