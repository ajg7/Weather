import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { WeatherChart } from "../components/common";

configure({ adapter: new Adapter() });

const wrapped = shallow(<WeatherChart />);

describe("Weather Chart", () => {
	test("Weather Chart renders", () => {
		expect(wrapped).toMatchSnapshot();
	});
});
