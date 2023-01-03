import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

function generateConnectedComponent(children: any) {
  const wrapper = render(children);
  return { wrapper };
}

export { generateConnectedComponent };
