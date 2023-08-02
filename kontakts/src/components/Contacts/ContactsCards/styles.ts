import styled from "styled-components";

const ContactCardLi = styled.li`
height: 3rem;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 1rem;
border-radius: inherit;
width: 100%;
background-color: var(--color-grey-4);
transition: 200ms;

&:hover {
    background-color: var(--color-secondary);
}

`

export { ContactCardLi }