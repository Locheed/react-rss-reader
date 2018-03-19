import React from "react";
import { shallow } from "enzyme";
import NewsList from "./NewsList";

describe("<NewsList />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NewsList />);
  });

  it("renders", () => {
    shallow(<NewsList />);
  });
});
