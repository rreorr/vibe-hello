import { describe, it, expect } from "vitest";
import { toTitleCase } from "../src/format.js";

describe("toTitleCase", () => {
  it("capitalises a single lowercase word", () => {
    expect(toTitleCase("alice")).toBe("Alice");
  });

  it("capitalises every word in a multi-word string", () => {
    expect(toTitleCase("john doe")).toBe("John Doe");
  });

  it("lowercases the tail of each word", () => {
    expect(toTitleCase("mARY jANE")).toBe("Mary Jane");
  });

  it("leaves already-title-cased input unchanged", () => {
    expect(toTitleCase("Alice Smith")).toBe("Alice Smith");
  });

  it("returns an empty string unchanged", () => {
    expect(toTitleCase("")).toBe("");
  });

  it("preserves surrounding and internal whitespace", () => {
    expect(toTitleCase("  anna  karenina  ")).toBe("  Anna  Karenina  ");
  });

  it("handles unicode letters", () => {
    expect(toTitleCase("ångström")).toBe("Ångström");
  });

  it("handles a unicode name with multiple words", () => {
    expect(toTitleCase("josé maría")).toBe("José María");
  });
});
