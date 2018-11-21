import { coupleAdjacentCellToRightSide, shiftZeros } from "../transform"

describe("merge cells", () => {
  describe("no merge/ update", () => {
    const noMerge = [
      {
        input: [0, 0, 0, 2],
        message: "single non zero : no update",
        expected: [0, 0, 0, 2]
      },
      {
        input: [0, 0, 4, 2],
        message: "two unique non zero : no update",
        expected: [0, 0, 4, 2]
      },
      {
        input: [0, 2, 0, 4],
        message: "two unique non zero : no update",
        expected: [0, 2, 0, 4]
      },
      {
        message: "three unique non zero : no update",
        input: [0, 8, 4, 2],
        expected: [0, 8, 4, 2]
      },
      {
        message: "three non unique but separted by unique non zero : no update",
        input: [2, 0, 4, 2],
        expected: [2, 0, 4, 2]
      },
      {
        message: "four non unique but separted by unique non zero : no update",
        input: [4, 2, 4, 2],
        expected: [4, 2, 4, 2]
      },
      {
        message: "four non unique but separted by unique non zero : no update",
        input: [2, 4, 8, 16],
        expected: [2, 4, 8, 16]
      },
      {
        message: "zeros in between similar items",
        input: [2, 0, 2, 0],
        expected: [2, 0, 2, 0]
      }
    ]

    noMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleAdjacentCellToRightSide(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("single merge", () => {
    const singleMerge = [
      {
        message: "two adjacent right corner into one at end",
        input: [0, 0, 2, 2],
        expected: [0, 0, 0, 4]
      },
      {
        message: "two adjacent center elements into one at end",
        input: [0, 2, 2, 0],
        expected: [0, 0, 4, 0]
      },
      {
        message: "two adjacent center elements into one at end",
        input: [2, 2, 0, 0],
        expected: [0, 4, 0, 0]
      }
    ]

    singleMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleAdjacentCellToRightSide(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("two merges", () => {
    const twoMerge = [
      {
        message: "four same values into two",
        input: [2, 2, 2, 2],
        expected: [0, 4, 0, 4]
      },

      {
        message: "two different values merges",
        input: [2, 2, 4, 4],
        expected: [0, 4, 0, 8]
      }
    ]

    twoMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleAdjacentCellToRightSide(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })
})

describe("shifting in array", () => {
  describe("no shift", () => {
    const noShift = [
      { message: "all zeros", input: [0, 0, 0, 0], expected: [0, 0, 0, 0] },
      {
        message: "all unique zeros",
        input: [8, 6, 4, 2],
        expected: [8, 6, 4, 2]
      },
      {
        message: "all same non-zeros",
        input: [2, 2, 2, 2],
        expected: [2, 2, 2, 2]
      },
      {
        message: "two zeros on the left",
        input: [0, 0, 2, 2],
        expected: [0, 0, 2, 2]
      },
      {
        message: "one zero on the left",
        input: [0, 2, 2, 2],
        expected: [0, 2, 2, 2]
      },
      {
        message: "threes zeros on the left",
        input: [0, 0, 0, 2],
        expected: [0, 0, 0, 2]
      }
    ]

    noShift.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = shiftZeros(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("single elment shift", () => {
    const singleElementShift = [
      {
        message: "single position shifted",
        input: [0, 0, 4, 0],
        expected: [0, 0, 0, 4]
      },
      {
        message: "two positions shifted",
        input: [0, 4, 0, 0],

        expected: [0, 0, 0, 4]
      },
      {
        message: "three positions shift",
        input: [4, 0, 0, 0],
        expected: [0, 0, 0, 4]
      }
    ]

    singleElementShift.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = shiftZeros(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("one shifted and other not shifted", () => {
    const oneShiftedButOtherNotShifted = [
      {
        input: [0, 2, 0, 4],
        expected: [0, 0, 2, 4],
        message: "one position gap"
      },
      {
        input: [2, 0, 0, 4],
        expected: [0, 0, 2, 4],
        messsage: "two position gap"
      }
    ].forEach(testObject => {
      const input = testObject.input
      const actual = shiftZeros(input)
      const expected = testObject.expected
      expect(actual).toMatchObject(expected)
    })
  })
})
