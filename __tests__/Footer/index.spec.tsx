import React from "react";
import { configure, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../../components/Footer";
import { generateConnectedComponent } from "../../components/common/testUtils";

configure({ testIdAttribute: "data-testid", defaultIgnore: "styles" });

let setOperationTypeMock = jest.fn();
let setDataMock = jest.fn();

describe("Footer", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should render component", () => {
    const { wrapper } = generateConnectedComponent(
      <Footer
        setOperationType={setOperationTypeMock}
        setData={setDataMock}
        data={[]}
      />
    );
    expect(wrapper).toBeTruthy();

    const startGameText = wrapper.getByTestId("start-game-icon");
    expect(startGameText).toBeInTheDocument();
  });
});
