import { expect, test } from "vitest";
import { isActivePath } from "./userInterface";

test("isActivePath", () => {
  const testCases = [
    {
      // Returns true for login path ("/login/") when path is "/login/"
      currentPath: "/login/",
      href: "/login/",
      expected: true,
    },

    {
      // Returns true for root path ("/") when path is "/" or "/index.html"
      currentPath: "/",
      href: "/",
      expected: true,
    },

    {
      currentPath: "/index.html",
      href: "/",
      expected: true,
    },

    {
      //Returns true when current path includes the href
      currentPath: "/dashboard/settings",
      href: "/dashboard",
      expected: true,
    },

    {
      //Returns false when paths don't match
      currentPath: "/profile",
      href: "/dashboard",
      expected: false,
    },
  ];

  testCases.forEach(({ href, currentPath, expected }) => {
    const result = isActivePath(href, currentPath);
    expect(result).toEqual(expected);
  });
});
