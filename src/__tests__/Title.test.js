import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Title } from "../components/common";

configure({ adapter: new Adapter() });
const title = "Weather Test Title";
const wrapped = shallow(<Title title={title} />);

describe("Title", () => {
	test("should render the Title Component", () => {
		expect(wrapped).toMatchSnapshot();
	});

	test("renders the Title Text", () => {
		expect(wrapped.find("h1").text()).toEqual(title);
	});
});
