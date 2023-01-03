import React from "react";
import "@testing-library/jest-dom";

import Index from "../../pages/index";
import { generateConnectedComponent } from "../../components/common/testUtils";

describe("Home", () => {
  it("Should render component", () => {
    const { wrapper } = generateConnectedComponent(<Index />);
    expect(wrapper).toBeTruthy();
  });
});
