import { CustomerAction, CustomerState, ICustomer } from "../../types/types";
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from "../actions/customerTypes";

export const initialState: CustomerState = {
  customers: [
    {
      id: 1,
      firstName: "Charles",
      lastName: "Babbage",
      phoneNumber: "0412 123 123",
    },
    {
      id: 2,
      firstName: "Alan",
      lastName: "Turing",
      phoneNumber: "(03) 9599 1234",
    },
    {
      id: 3,
      firstName: "Ada",
      lastName: "Lovelace",
      phoneNumber: "+61 423 345 567",
    },
  ],
};

export const customerReducer = (
  state: CustomerState = initialState,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case ADD_CUSTOMER:
      const newCustomer: ICustomer = {
        id: action.customer.id ?? Math.random(), // not really unique but it's just an example
        firstName: action.customer.firstName,
        lastName: action.customer.lastName,
        phoneNumber: action.customer.phoneNumber,
      };
      return {
        ...state,
        customers: state.customers.concat(newCustomer),
      };
    case REMOVE_CUSTOMER:
      const updatedCustomers: ICustomer[] = state.customers.filter(
        (customer) => customer.id !== action.customer.id
      );
      return {
        ...state,
        customers: updatedCustomers,
      };
  }
  return state;
};
