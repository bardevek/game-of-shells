import { swapElements } from "./swapElements";

const first = { id: 0 };
const second = { id: 1 };
const third = { id: 2 };
const fourth = { id: 3 };
const fifth = { id: 4 };

it("should swap elements in 3 elements array", () => {
  const initialData = [first, second, third];
  const resultData = [first, third, second];
  expect(swapElements(initialData, third, second)).toStrictEqual(resultData);
});

it("should swap elements in 4 elements array", () => {
  const initialData = [first, second, third, fourth];
  const resultData = [third, second, first, fourth];
  expect(swapElements(initialData, third, first)).toStrictEqual(resultData);
});

it("should swap elements in 5 elements array", () => {
  const initialData = [first, second, third, fourth, fifth];
  const resultData = [first, fourth, third, second, fifth];
  expect(swapElements(initialData, second, fourth)).toStrictEqual(resultData);
});
