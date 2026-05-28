import add from "./stringCalculator.js";

describe("Calculadora de cadenas", () => {
  test("cadena vacia retorna 0", () => {
    expect(add("")).toBe(0);
  });
});