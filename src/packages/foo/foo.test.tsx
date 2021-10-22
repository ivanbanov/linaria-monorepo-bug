import React from "react";
import { render, screen } from "@testing-library/react";
import { Foo } from "./src";

test("renders learn react link", () => {
  render(<Foo>foo</Foo>);
  const foo = screen.getByText(/foo/i);
  expect(foo).toBeInTheDocument();
});
