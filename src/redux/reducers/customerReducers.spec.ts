import { ADD_CUSTOMER, REMOVE_CUSTOMER } from "../actions/customerTypes";
import { customerReducer } from "./customerReducers";

const initialState = {
  customers: [
    {
      firstName: "Charles",
      id: 1,
      lastName: "Babbage",
      phoneNumber: "0412 123 123",
    },
    {
      firstName: "Alan",
      id: 2,
      lastName: "Turing",
      phoneNumber: "(03) 9599 1234",
    },
    {
      firstName: "Ada",
      id: 3,
      lastName: "Lovelace",
      phoneNumber: "+61 423 345 567",
    },
  ],
};

const emptyIntialState = { customers: [] };

describe("customer reducer", () => {
  it("should return the initial state", () => {
    expect(customerReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_CUSTOMER", () => {
    expect(
      customerReducer(emptyIntialState, {
        type: ADD_CUSTOMER,
        customer: {
          firstName: "Test",
          id: 1,
          lastName: "Dummy",
          phoneNumber: "000 000 000",
        },
      })
    ).toEqual({
      customers: [
        {
          firstName: "Test",
          id: 1,
          lastName: "Dummy",
          phoneNumber: "000 000 000",
        },
      ],
    });
  });

  it("should handle REMOVE_CUSTOMER", () => {
    expect(
      customerReducer(initialState, {
        type: REMOVE_CUSTOMER,
        customer: {
          firstName: "Charles",
          id: 1,
          lastName: "Babbage",
          phoneNumber: "0412 123 123",
        },
      })
    ).toEqual({
      customers: [
        {
          firstName: "Alan",
          id: 2,
          lastName: "Turing",
          phoneNumber: "(03) 9599 1234",
        },
        {
          firstName: "Ada",
          id: 3,
          lastName: "Lovelace",
          phoneNumber: "+61 423 345 567",
        },
      ],
    });
  });
});
