import React from "react";
import { shallow } from "enzyme";

import { Header } from "./Header";
import { instruction, question } from "./messages";
import {StartButton} from "./StartButton";
import {DifficultySelect} from "./DifficultySelect";

it("should render instruction in stage 0", () => {
  const header = shallow(<Header stage={0} />);
  expect(header.text()).toContain(instruction);
});

it("should render question in stage 3", () => {
  const header = shallow(<Header stage={3} />);
  expect(header.text()).toContain(question);
});

it("should render correctMessage in stage 4 on right guess", () => {
  const correctMessage = "You're right !";

  const header = shallow(<Header stage={4} resultMessage={correctMessage} />);
  expect(header.text()).toContain(correctMessage);
});

it("should render correctMessage in stage 4 on bad guess", () => {
    const mistakeMessage = "Not this time. Try again!";

    const header = shallow(<Header stage={4} resultMessage={mistakeMessage} />);
    expect(header.text()).toContain(mistakeMessage);
});

it("should render START message in button in stage 0", () => {
    const header = shallow(<StartButton stage={0} />);
    expect(header.text()).toContain("START");
});

it("should render TRY AGAIN message in button in stage 4", () => {
    const header = shallow(<StartButton stage={4} />);
    expect(header.text()).toContain("TRY AGAIN");
});

it("should render Beginner message in select in default", () => {
    const header = shallow(<DifficultySelect />);
    expect(header.text()).toContain("Beginner");
});

it("should render Expert message in select for numberOfShells=5", () => {
    const header = shallow(<DifficultySelect numberOfShells={5} />);
    expect(header.text()).toContain("Expert");
});
