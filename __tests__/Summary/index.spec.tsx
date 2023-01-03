import React from "react";
import { configure, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../../components/Footer";
import { generateConnectedComponent } from "../../components/common/testUtils";
import { Summary } from "../../components/Summary";

configure({ testIdAttribute: "data-testid", defaultIgnore: "styles" });

let setOperationTypeMock = jest.fn();
let setDataMock = jest.fn();

describe("Summary", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render component", () => {
    const { wrapper } = generateConnectedComponent(<Summary data={[]} />);
    expect(wrapper).toBeTruthy();

    const title = wrapper.getByTestId("title-summary");
    expect(title).toBeInTheDocument();
  });
});
