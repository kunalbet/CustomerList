import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { customerReducer } from "../redux/reducers/customerReducers";

// @TODO clean up types here
// Set-up copied from https://redux.js.org/recipes/writing-tests#components
function render(
  // @ts-ignore
  ui,
  {
    // @ts-ignore
    initialState,
    store = createStore(customerReducer, initialState),
    ...renderOptions
  } = {}
) {
  // @ts-ignore
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  // @ts-ignore
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
