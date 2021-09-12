import { Field, Formik, FormikHelpers } from "formik";
import * as React from "react";
import { ICustomer, Customer } from "../../types/types";
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledAddButton,
} from "./StyledAddCustomerForm";

type Props = {
  saveCustomer: (customer: ICustomer | any) => void;
};

export const AddCustomerForm: React.FC<Props> = ({ saveCustomer }) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phoneNumber: "",
      }}
      onSubmit={(
        values: Customer,
        { setSubmitting }: FormikHelpers<Customer>
      ) => {
        saveCustomer(values);
        setSubmitting(false);
      }}
    >
      <StyledForm>
        <StyledLabel htmlFor="firstName">First Name</StyledLabel>
        <Field
          as={StyledInput}
          id="firstName"
          name="firstName"
          placeholder="John"
        />

        <StyledLabel htmlFor="lastName">Last Name</StyledLabel>
        <Field
          as={StyledInput}
          id="lastName"
          name="lastName"
          placeholder="Doe"
        />

        <StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
        <Field
          as={StyledInput}
          id="phoneNumber"
          name="phoneNumber"
          placeholder="john@acme.com"
          type="tel"
        />

        <StyledAddButton type="submit">Add Customer</StyledAddButton>
      </StyledForm>
    </Formik>
  );
};
