import {
  coupleCellToRight,
  coupleCellToLeft,
  coupleAdjacentCellToRightSide
} from "../coupleCells"

describe("right integration test : update row", () => {
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

  describe("right shift : but no merge", () => {
    const onlyRightShift = [
      {
        input: [2, 4, 6, 0],
        expected: [0, 2, 4, 6],
        message: "right shift all three : case 1"
      },
      {
        input: [2, 0, 4, 6],
        expected: [0, 2, 4, 6],
        message: "right shift all three : case 2"
      },
      {
        input: [2, 4, 0, 6],
        expected: [0, 2, 4, 6],
        message: "right shift all three : case 3"
      },
      {
        input: [0, 4, 6, 0],
        expected: [0, 0, 4, 6],
        message: "two shift right : case 1"
      },
      {
        input: [4, 6, 0, 0],
        expected: [0, 0, 4, 6],
        message: "two shift right : case 2"
      },
      {
        input: [4, 0, 0, 6],
        expected: [0, 0, 4, 6],
        message: "two shift right : case 3"
      }
    ]

    onlyRightShift.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleCellToRight(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("single merge ", () => {
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
        input: [2, 0, 8, 8],
        expected: [0, 0, 2, 16],
        message: "two unique non zeros,one non zeros and one gap"
      },
      {
        input: [8, 0, 8, 8],
        expected: [0, 0, 8, 16],
        message: "three unique non zeros but one gap and shift to right"
      },
      {
        input: [8, 8, 0, 8],
        expected: [0, 0, 8, 16],
        message: "three unique non zeros but one gap and shift to right"
      },
      {
        message: "two unique non zeros but one zero in between",
        input: [2, 0, 2, 4],
        expected: [0, 0, 4, 4]
      },
      {
        input: [0, 0, 8, 8],
        message: "basic single merge",
        expected: [0, 0, 0, 16]
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

  describe("two merges", () => {
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

describe("left integration test : update row", () => {
  describe("no changes", () => {
    const noChanges = [
      { input: [0, 0, 0, 0], expected: [0, 0, 0, 0], message: "all zeros" },
      {
        input: [2, 4, 8, 16],
        expected: [2, 4, 8, 16],
        message: "all unique non zeros"
      },
      {
        input: [2, 4, 8, 0],
        expected: [2, 4, 8, 0],
        message: "three unique non zeros"
      },
      {
        input: [2, 4, 0, 0],
        expected: [2, 4, 0, 0],
        message: "two unique non zeros on right side"
      },
      {
        input: [2, 0, 0, 0],
        expected: [2, 0, 0, 0],
        message: "single unique non zeros on right side"
      }
    ]

    noChanges.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleCellToLeft(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("left shift : but no merge", () => {
    const onlyLeftShift = [
      {
        input: [0, 2, 4, 6],
        expected: [2, 4, 6, 0],
        message: "only shift left : case 1"
      },
      {
        input: [2, 0, 4, 6],
        expected: [2, 4, 6, 0],
        message: "only shift left : case 2"
      },
      {
        input: [2, 4, 0, 6],
        expected: [2, 4, 6, 0],
        message: "only shift left : case 2"
      },
      {
        input: [0, 0, 4, 6],
        expected: [4, 6, 0, 0],
        message: "two shift left : case 1"
      },
      {
        input: [4, 0, 0, 6],
        expected: [4, 6, 0, 0],
        message: "two shift left : case 2"
      }
    ]

    onlyLeftShift.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleCellToLeft(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("single merge", () => {
    const shiftLeft = [
      {
        input: [2, 2, 0, 0],
        expected: [4, 0, 0, 0],
        message: "couple left corner positions towards left"
      },
      {
        input: [0, 2, 2, 0],
        expected: [4, 0, 0, 0],
        message: "couple center positions and shift "
      },
      {
        input: [0, 0, 2, 2],
        expected: [4, 0, 0, 0],
        message: "couple right corner positions and shift two positions"
      },
      {
        input: [8, 0, 8, 0],
        expected: [16, 0, 0, 0],
        message: "couple : one zero in between : case 1"
      },
      {
        message: "couple : one zero in between : case 2",
        input: [0, 8, 0, 8],
        expected: [16, 0, 0, 0]
      },
      {
        message: "couple : two zero in betwwen ",
        input: [8, 0, 0, 8],
        expected: [16, 0, 0, 0]
      }
    ]

    shiftLeft.forEach(testObject => {
      test(`${testObject.message}`, () => {
        if (testObject.debug) {
        }
        const input = testObject.input
        const actual = coupleCellToLeft(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("single merge and shifted ", () => {
    const singleMerge = [
      {
        input: [0, 8, 8, 0],
        expected: [16, 0, 0, 0],
        message: "two unique adjacent non zeros : center"
      },
      {
        input: [8, 8, 0, 0],
        expected: [16, 0, 0, 0],
        message: "two unique non zeros at the left corner"
      },
      {
        input: [8, 0, 8, 8],
        expected: [16, 8, 0, 0],
        message: "three unique non zeros first one merged "
      },
      {
        message:
          "two unique non zeros with one gap, merge and shift to right : case 1",
        input: [2, 0, 2, 4],
        expected: [4, 4, 0, 0]
      },
      {
        input: [2, 0, 2, 8],
        message:
          "two unique non zeros with one gap, merge and shift to right : case 2",
        expected: [4, 8, 0, 0]
      }
    ]
    singleMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleCellToLeft(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("two merges and update row", () => {
    test("two adjacent merges of same values", () => {
      const input = [2, 2, 2, 2]
      const actual = coupleCellToLeft(input)
      const expected = [4, 4, 0, 0]
      expect(actual).toMatchObject(expected)
    })
    test("two adjacent merges of different values", () => {
      const input = [2, 2, 4, 4]
      const actual = coupleCellToLeft(input)
      const expected = [4, 8, 0, 0]
      expect(actual).toMatchObject(expected)
    })
  })
})

describe("merge cells : right", () => {
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
        message: "zeros in between similar items : case 1",
        input: [2, 0, 2, 0],
        expected: [2, 0, 2, 0]
      },
      {
        message: "zeros in between similar items : case 2",
        input: [0, 2, 0, 2],
        expected: [0, 2, 0, 2]
      },
      {
        message: "zeros in between similar items : case 3",
        input: [2, 0, 0, 2],
        expected: [2, 0, 0, 2]
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
        input: [2, 4, 8, 16],
        expected: [2, 4, 8, 16]
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
      },
      {
        message:
          "three adjacenet elements but one at right end merges : case 1",
        input: [0, 2, 2, 2],
        expected: [0, 2, 0, 4]
      },
      {
        message:
          "three adjacenet elements but one at right end merges : case 2",
        input: [2, 2, 0, 2],
        expected: [0, 4, 0, 2]
      },
      {
        message:
          "three adjacenet elements but one at right end merges : case 3",
        input: [2, 2, 2, 0],
        expected: [2, 0, 4, 0]
      },
      {
        message:
          "three values :two unique adjacenet elements merges only other says in the place.",
        input: [2, 2, 4, 0],
        expected: [0, 4, 4, 0]
      },
      {
        message:
          "four values :two unique adjacenet elements merges only other says in the place.",
        input: [4, 2, 2, 4],
        expected: [4, 0, 4, 4]
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
