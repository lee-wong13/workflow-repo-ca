import { beforeEach, describe, expect, it } from "vitest";
import { getUsername, saveUser } from "./storage";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  //Returns the name from the user object in storage (first save a user object to storage)
  describe("saveUser", () => {
    it("returns the name from the user object in storage after saving a user", () => {
      const user = "save-user";
      saveUser(user);
      expect(localStorage.getItem("user")).toBe(JSON.stringify(user));
    });

    it("returns null when no user exists in storage", () => {
      const user = getUsername();
      expect(user).toBeNull();
    });
  });
});
