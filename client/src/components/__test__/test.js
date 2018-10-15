import React from "react";
import { shallow } from "enzyme";
import ItemDescription from "../ItemDescription";

describe("<ItemDescription />", () => {
  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });
});
