import * as React from "react";
import { render, screen, fireEvent } from "../../utils/testUtils";
import { Customers } from "./Customers";
import * as redux from "react-redux"; 

const customers = [{
  id: 1,
  firstName: "Test",
  lastName: "Tester",
  phoneNumber: "00000000",
}];

describe("<Customers />", () => {
  it("should render a <Customers />", () => {
    const wrapper = render(
      <Customers customers={customers} removeCustomer={() => {}} />
    );
    expect(wrapper.container).toMatchSnapshot();
  });

  it('renders customers table', () => {
    render(<Customers customers={customers} removeCustomer={() => {}} />);
    const linkElement = screen.getByText(/First Name/);
    const linkElement1 = screen.getByText(/Last Name/);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement1).toBeInTheDocument();
  });

  it('renders customers Data in table', () => {
    render(<Customers customers={customers} removeCustomer={() => {}} />);
    const customerRows = screen.getAllByTestId('customer-row');
    expect(customerRows.length).toBe(1);
  });

  it('calls removeCustomer prop with currect customer when DELETE button is clicked', () => {
    const mockRemoveCustomer = jest.fn();
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    render(<Customers customers={customers} removeCustomer={mockRemoveCustomer} />);
    fireEvent.click(screen.getByTestId('delete-button'));
    expect(mockDispatchFn).toHaveBeenCalledTimes(1);
    expect(mockRemoveCustomer).toHaveBeenCalledWith(customers[0]);
  })
});
