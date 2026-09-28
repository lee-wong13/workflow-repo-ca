import { expect, test } from "vitest";
import { getUsername } from "./storage";

test("getUsername returns the name from the user object in in storage", () => {
  const mockUser = { name: "John Doe" };
  localStorage.setItem("user", JSON.stringify(mockUser));
  expect(getUsername()).toBe("John Doe");
  localStorage.removeItem("user");
});

test("getUsername returns null when no user exists in storage", () => {
  localStorage.removeItem("user");
  expect(getUsername()).toBe(null);
});
