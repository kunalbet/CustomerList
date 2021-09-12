import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customers } from "../components/Customers/Customers";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { addCustomer, removeCustomer } from "../redux/actions/customerActions";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const Home: React.FC = () => {
  const [duplicateRecord, setDuplicateRecord] = React.useState(false);

  const handleClose = () => {
    setDuplicateRecord(false);
  };

  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => {
      const existingCustomer: ICustomer | undefined = customers.find((elem: ICustomer) => {
        return ((elem.firstName.toLowerCase() === customer.firstName 
          && elem.lastName.toLowerCase() === customer.lastName) 
          || elem.phoneNumber === customer.phoneNumber) ? true : false;
      });
      if (existingCustomer === undefined) {
        dispatch(addCustomer(customer));
      } else {
        setDuplicateRecord(true);
      }
    },
    [dispatch, customers]
  );

  return (
    <>
      {duplicateRecord && (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={duplicateRecord}>
          <DialogTitle id="simple-dialog-title"><b>User already exist!!</b></DialogTitle>
        </Dialog>
      )}
      <AddCustomerForm saveCustomer={saveCustomer} />
      {customers && customers.length > 0 
        && (<Customers customers={customers} removeCustomer={removeCustomer} />)}
    </>
  );
};

export default Home;
