import React from "react";
import Checkbox from "./index.js";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Checkbox specifications", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Checkbox />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
