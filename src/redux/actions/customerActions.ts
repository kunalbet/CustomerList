import { CustomerAction, ICustomer } from "../../types/types";
import { ADD_CUSTOMER, REMOVE_CUSTOMER } from "./customerTypes";

export const addCustomer = (customer: ICustomer): CustomerAction => ({
  type: ADD_CUSTOMER,
  customer,
});

export const removeCustomer = (customer: ICustomer): CustomerAction => ({
  type: REMOVE_CUSTOMER,
  customer,
});
