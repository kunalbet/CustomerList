import { createStore, Store } from "redux";
import { CustomerAction, CustomerState } from "../types/types";
import { customerReducer } from "./reducers/customerReducers";

export type DispatchType = (args: CustomerAction) => CustomerAction;

export const store: Store<CustomerState, CustomerAction> & {
  dispatch: DispatchType;
} = createStore(customerReducer);
