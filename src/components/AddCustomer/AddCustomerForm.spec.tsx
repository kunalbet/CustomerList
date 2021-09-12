import * as React from "react";
import { render } from "../../utils/testUtils";
import { AddCustomerForm } from "./AddCustomerForm";

describe("<AddCustomerForm />", () => {
  it("should render a <AddCustomerForm />", () => {
    const wrapper = render(<AddCustomerForm saveCustomer={() => {}} />);
    expect(wrapper.container).toMatchSnapshot();
  });

  //@TODO Add tests for entering data and clicking submit
});
