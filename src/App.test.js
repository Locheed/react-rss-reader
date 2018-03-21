import React from "react";
import App from "./App";
import { shallow, mount } from "enzyme";
import NewsList from "./containers/NewsList";
import NewsDetail from "./components/NewsDetail";
import Settings from "./components/Settings";

const options = {
  disableLifecycleMethods: true
};
describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />, options);
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

  it("calls onClick event on click of a news title", () => {
    const items = [
      {
        title: "Henkilöauto törmäsi kuorma-auton keulaan Liperissä"
      }
    ];
    const onClick = jest.fn();
    let newsList = mount(<NewsList items={items} onNewsSelect={onClick} />);
    newsList
      .find(".news-item li")
      .first()
      .simulate("click");
    expect(onClick).toBeCalledWith({
      title: "Henkilöauto törmäsi kuorma-auton keulaan Liperissä"
    });
  });
});
