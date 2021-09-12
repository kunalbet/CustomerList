import { Field, Formik, FormikHelpers, ErrorMessage } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
  StyledErrorDiv,
  StyledFormDiv,
  StyledAccordionDetails
} from "./StyledAddCustomerForm";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

const validate = (values: any) => {
  const errors: any = {};
  if (!values.firstName) {
    errors.firstName = 'Please enter the first name';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Please enter the last name';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'Please enter the phone number';
  } else if (!/^(\+?\(61\)|\(\+?61\)|\+?61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){7,9}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
  }

  return errors;
};

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      validate={validate}
      onSubmit={(
        values: Customer,
        { setSubmitting }: FormikHelpers<Customer>
      ) => {
        saveCustomer(values);
        setSubmitting(false);
      }}
    >
      {({ isValid, dirty }) => (
      <StyledForm>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h4">Add a customer</Typography>
          </AccordionSummary>
          <StyledAccordionDetails>
            <StyledFormDiv>
              <StyledErrorDiv><b>All the form fields are mandatory</b></StyledErrorDiv>
              <StyledLabel htmlFor="firstName">First Name</StyledLabel>
              <Field
                as={StyledInput}
                id="firstName"
                name="firstName"
                placeholder="John"
              />
              <ErrorMessage render={msg => <StyledErrorDiv>{msg}</StyledErrorDiv>} name="firstName" />

              <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
              <Field
                as={StyledInput}
                id="lastName"
                name="lastName"
                placeholder="Doe"
              />
              <ErrorMessage render={msg => <StyledErrorDiv>{msg}</StyledErrorDiv>} name="lastName" />

              <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
              <Field
                as={StyledInput}
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+61 123 456 789"
                type="tel"
              />
              <ErrorMessage render={msg => <StyledErrorDiv>{msg}</StyledErrorDiv>} name="phoneNumber" />

              <StyledAddButton type="submit" disabled={!isValid && dirty} data-testid="addCust-button">
                Add Customer
              </StyledAddButton>
            </StyledFormDiv>
          </StyledAccordionDetails>
        </Accordion>
        
      </StyledForm>
      )}
    </Formik>
  );
};
