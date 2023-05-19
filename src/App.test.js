import { fireEvent, render } from "@testing-library/react";
import MyComp from "./comp1";

test("new test", () => {
  const comp = render(<MyComp name="vamshi"></MyComp>);
  console.log(comp.debug());
  expect(comp.queryByText("hi")).toBeTruthy();
  fireEvent.click(comp.getByText("hi"));
  expect(comp.queryByText("vamshi")).toBeTruthy();
});
