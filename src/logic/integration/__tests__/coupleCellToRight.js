import { coupleCellToRight } from "../coupleCellToRight"

describe("integration test : update row", () => {
  describe("no changes", () => {
    const noChanges = [
      { input: [0, 0, 0, 0], expected: [0, 0, 0, 0], message: "all zeros" },
      {
        input: [2, 4, 8, 16],
        expected: [2, 4, 8, 16],
        message: "all unique non zeros"
      },
      {
        input: [0, 4, 8, 16],
        expected: [0, 4, 8, 16],
        message: "three uniqure non zeros"
      },
      {
        input: [0, 0, 8, 16],
        expected: [0, 0, 8, 16],
        message: "two uniqure non zeros"
      },
      {
        input: [0, 0, 0, 8],
        expected: [0, 0, 0, 8],
        message: "one uniqure non zeros"
      }
    ]

    noChanges.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleCellToRight(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("single merge and shifted ", () => {
    const singleMerge = [
      {
        input: [0, 8, 8, 0],
        expected: [0, 0, 0, 16],
        message: "two unique adjacent non zeros : center"
      },
      {
        input: [8, 8, 0, 0],
        expected: [0, 0, 0, 16],
        message: "two unique non zeros at the left corner"
      },
      {
        input: [8, 0, 8, 0],
        expected: [0, 0, 0, 16],
        message: "two unique non zeros with one gap and shift to right"
      },
      {
        message: "two unique non zeros with one gap and no shift to right",
        input: [0, 8, 0, 8],
        expected: [0, 0, 0, 16]
      },
      {
        message: "two unique non zeros at the corners",
        input: [8, 0, 0, 8],
        expected: [0, 0, 0, 16]
      },
      {
        input: [8, 0, 8, 8],
        expected: [0, 0, 16, 8],
        message: "three unique non zeros but one gap and shift to right"
      },
      {
        message: "three unique non zeros but one gap and shift to right",
        input: [2, 0, 2, 4],
        expected: [0, 0, 4, 4]
      },
      {
        input: [2, 0, 2, 8],
        message: "three unique non zeros but one gap and shift to right",
        expected: [0, 0, 4, 8]
      }
    ]
    singleMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleCellToRight(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("two merges and update row", () => {
    test("two adjacent merges of same values", () => {
      const input = [2, 2, 2, 2]
      const actual = coupleCellToRight(input)
      const expected = [0, 0, 4, 4]
      expect(actual).toMatchObject(expected)
    })
    test("two adjacent merges of different values", () => {
      const input = [2, 2, 4, 4]
      const actual = coupleCellToRight(input)
      const expected = [0, 0, 4, 8]
      expect(actual).toMatchObject(expected)
    })
  })
})
