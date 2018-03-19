import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import NewsList from "./containers/NewsList";
import NewsDetail from "./components/NewsDetail";
import Settings from "./components/Settings";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders NewsList", () => {
    expect(wrapper.find(NewsList).length).toEqual(1);
  });
  it("renders NewsDetail", () => {
    expect(wrapper.find(NewsDetail).length).toEqual(1);
  });
  it("renders Settings", () => {
    expect(wrapper.find(Settings).length).toEqual(1);
  });
});
