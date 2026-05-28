import add from "./stringCalculator.js";

describe("Calculadora de cadenas", () => {
  test("cadena vacia retorna 0", () => {
    expect(add("")).toBe(0);
  });
});

test("cadena con un solo numero retorna ese numero", () => {
  expect(add("2")).toBe(2);
});

test("dos numeros separados por coma retornan la suma", () => {
  expect(add("1,2")).toBe(3);
});

test("varios numeros separados por coma retornan la suma", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("numeros separados por guion retornan la suma", () => {
  expect(add("1-2-3")).toBe(6);
});

test("numeros separados por coma y guion retornan la suma", () => {
  expect(add("1-2,3")).toBe(6);
});