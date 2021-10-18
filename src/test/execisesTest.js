const {
  pack,
  range,
  currify,
  compose,
  map,
  partial,
  partialRight,
  first,
} = require("../functionalLib.js");
const {
  writters,
  names,
  numbers,
  triangle,
  books,
  concerts,
} = require("./data.js");

const chai = require("chai");
const expect = chai.expect;

describe("exercises (all the data passed to functions comes from data.js file, unless explicitly stated on the test)", () => {
  describe("basics", () => {
    // suggestion: use map
    it("return a new array greeting all names", () => {
      const greetAll = (names) => names.map((n) => `hi ${n}`);

      expect(greetAll(names)).to.deep.equal([
        "hi juan",
        "hi ivan",
        "hi jose",
        "hi sebas",
        "hi miguel",
        "hi ricardo",
        "hi edu",
      ]);
    });

    // suggestion: use reduce
    it("return the sum of the numbers array", () => {
      const getSum = (numbers) => numbers.reduce((acc, next) => acc + next, 0);

      expect(getSum(numbers)).to.deep.equal(150);
    });

    // suggestion: use reduce
    xit("return the greatest number in the array", () => {
      expect(getGreatest(numbers)).to.deep.equal(60);
    });

    // restriction: use compose
    xit("return the area of a triangle", () => {
      expect(triangleArea(triangle)).to.deep.equal(50);
    });

    xit("sort list of books by ascending price and return an array with the prices", () => {
      const bookPrices = [32, 59, 72, 75];

      expect(sortList(books)).to.deep.equal(bookPrices);
    });
  });

  describe("Given a collection of writters (in data.js), correctIncomes function should correct a typo in their incomes, so it", () => {
    // use partial or currify
    xit("should return a new array with only the incomes corrected multiplied by 1000", () => {
      expect(correctIncomes(writters)).to.deep.equal([
        93000, 44000, 98000, 13000,
      ]);
    });
  });

  describe("fizzbuzz", () => {
    const result = [
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
      16,
      17,
      "fizz",
      19,
      "buzz",
      "fizz",
      22,
      23,
      "fizz",
      "buzz",
      26,
      "fizz",
      28,
      29,
      "fizzbuzz",
    ];

    xit("should return an array with numbers from 1 to 30 replacing multiples of 3 by fizz, multiples of 5 by buzz and multiples of both by fizzbuzz", () => {
      expect(functionalFizzbuzz()).to.deep.equal(result);
    });

    xit("currify and partial examples", () => {
      const sum = (a, b, c) => a + b + c;
      const csum = currify(sum);
      const sum10 = partial(sum, 10);
      const sum1and2 = partial(sum, 1, 2);
      const sum10and20 = partial(sum10, 20);

      expect(sum1and2(3)).to.equal(6);
      expect(sum10and20(2)).to.equal(32);
      expect(csum(10)(20)(2)).to.equal(32);
    });
  });
});
