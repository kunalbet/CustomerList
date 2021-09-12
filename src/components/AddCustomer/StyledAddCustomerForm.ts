import { Form } from "formik";
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styled from "styled-components";

export const StyledForm = styled(Form)`
  box-sizing: border-box;
  min-width: 100%;
  border: 1px solid #ccc;
  margin: 0 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin: 0 0 0.5rem;
  padding: 0;
`;

export const StyledInput = styled.input`
  margin: 0 0 1rem;
  padding: 0.5rem;
  font-size: 16px;
`;

export const StyledAddButton = styled.button`
  padding: 1rem;
  background-color: rgb(4, 121, 205);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledErrorDiv = styled.div`
  color: red;
  font-size: 14px;
  margin: -10px 0 20px 0;
`;

export const StyledFormDiv = styled.div`
  margin: 10px 0 20px 0;
  display: grid;
  flex-flow: column;
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  flex-flow: column;
`;
