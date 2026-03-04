import { describe, it, expect } from "vitest";
import { greet } from "../src/greeter.js";

describe("greet", () => {
  it("greets a name", () => {
    expect(greet("Rebecca")).toBe("Hello, Rebecca!");
  });

  it("trims whitespace", () => {
    expect(greet("  Sophie  ")).toBe("Hello, Sophie!");
  });

  it("handles blank input", () => {
    expect(greet("   ")).toBe("Hello!");
  });
});
