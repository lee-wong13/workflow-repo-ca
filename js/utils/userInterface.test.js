import { expect, test } from "vitest";
import { isActivePath } from "./userInterface";

test("isActivePath returns true when current path matches href exactly", () => {
  expect(isActivePath("/login/", "/login/")).toBe(true);
});

test('isActivePath returns true for root path ("/") when path is "/" or "/index.html"', () => {
  expect(isActivePath("/", "/")).toBe(true);
  expect(isActivePath("/", "/index.html")).toBe(true);
});

test("isActivePath returns true when current path includes the href", () => {
  expect(isActivePath("/venue/", "/venue/index.html?id=123")).toBe(true);
});

test("isActivePath returns false when paths don't match", () => {
  expect(isActivePath("/home/", "/about/")).toBe(false);
});
