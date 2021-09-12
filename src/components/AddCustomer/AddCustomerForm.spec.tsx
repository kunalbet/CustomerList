import * as React from "react";
import { render, waitFor, fireEvent, screen } from "../../utils/testUtils";
import { AddCustomerForm } from "./AddCustomerForm";
import userEvent from '@testing-library/user-event';

describe("<AddCustomerForm />", () => {
  it("should render a <AddCustomerForm />", () => {
    const wrapper = render(<AddCustomerForm saveCustomer={() => {}} />);
    expect(wrapper.container).toMatchSnapshot();
  });

  it('It should add new customer and invoke the saveCustomer prop', async () => {
    const mockSaveCustomer = jest.fn();
    let wrapper = render(<AddCustomerForm saveCustomer={mockSaveCustomer} />);
    const inputFirstName = wrapper.getByLabelText(/First Name/);
    const inputLastName = wrapper.getByLabelText(/Last Name/);
    const inputPhone = wrapper.getByLabelText(/Phone Number/);
    userEvent.type(inputFirstName, 'Tom');
    userEvent.type(inputLastName, 'Smith');
    userEvent.type(inputPhone, '0444333222');
    fireEvent.click(screen.getByTestId('addCust-button'));

    await waitFor(() => {
      expect(inputFirstName).toHaveValue('Tom');
      expect(inputLastName).toHaveValue('Smith');
      expect(inputPhone).toHaveValue('0444333222');
      expect(mockSaveCustomer).toHaveBeenCalledTimes(1);
    });
  });
  
});
