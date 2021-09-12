import * as React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { ICustomer } from "../../types/types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { StyledTableRow } from './StyledCustomers';

type Props = {
  customers: readonly ICustomer[];
  removeCustomer: (customer: ICustomer) => void;
};

export const Customers: React.FC<Props> = ({ customers, removeCustomer }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(removeCustomer(customer)),
    [dispatch, removeCustomer]
  );

  return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <TableCell><b>Sr.No</b></TableCell>
              <TableCell align="right"><b>First Name</b></TableCell>
              <TableCell align="right"><b>Last Name</b></TableCell>
              <TableCell align="right"><b>Phone Number</b></TableCell>
              <TableCell align="right">&nbsp;</TableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer: ICustomer, index) => (
              <TableRow key={customer.id} data-testid="customer-row">
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{customer.firstName}</TableCell>
                <TableCell align="right">{customer.lastName}</TableCell>
                <TableCell align="right">{customer.phoneNumber}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="secondary" data-testid="delete-button"
                  onClick={() => deleteCustomer(customer)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
};
