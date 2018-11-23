import {
  coupleAdjacentCellToRightSide,
  shiftZeros,
  coupleAdjacentCellToLeftSide,
  getNumberRepitionCount
} from "../transform"

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
      },
      {
        message: "single shift : case 2",
        input: [0, 4, 0, 4],
        expected: [0, 0, 4, 4]
      },
      {
        message: "two position shift : case 2",
        input: [4, 0, 0, 4],
        expected: [0, 0, 4, 4]
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

  describe("two elements shifted ", () => {
    const twoElementsShift = [
      {
        input: [2, 4, 0, 0],
        expected: [0, 0, 2, 4],
        message: "lefties to right"
      },
      {
        input: [2, 0, 4, 0],
        expected: [0, 0, 2, 4],
        messsage: "lefties but gagied to right"
      },
      {
        input: [2, 4, 0, 4],
        expected: [0, 2, 4, 4],
        messsage: "two position gap"
      }
    ]
    twoElementsShift.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = shiftZeros(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })

  describe("three elements shifted ", () => {
    const threeElementsShift = [
      {
        input: [2, 4, 6, 0],
        expected: [0, 2, 4, 6],
        message: "lefties to right"
      }
    ].forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = shiftZeros(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })
})

describe("merge cells : left", () => {
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
        message: "zeros in between similar items",
        input: [2, 0, 2, 0],
        expected: [2, 0, 2, 0]
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
      }
    ]

    noMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleAdjacentCellToLeftSide(input)
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
        expected: [0, 0, 4, 0]
      },
      {
        message: "two adjacent center elements into one at end",
        input: [0, 2, 2, 0],
        expected: [0, 4, 0, 0]
      },
      {
        message: "two adjacent center elements into one at end",
        input: [2, 2, 0, 0],
        expected: [4, 0, 0, 0]
      },
      {
        message: "three adjacent elements merge first : case 1",
        input: [0, 2, 2, 2],
        expected: [0, 4, 0, 2]
      },
      {
        message: "three adjacent elements merge first : case 2",
        input: [2, 2, 2, 0],
        expected: [4, 0, 2, 0]
      }
    ]

    singleMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleAdjacentCellToLeftSide(input)
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
        expected: [4, 0, 4, 0]
      },

      {
        message: "two different values merges",
        input: [2, 2, 4, 4],
        expected: [4, 0, 8, 0]
      }
    ]

    twoMerge.forEach(testObject => {
      test(`${testObject.message}`, () => {
        const input = testObject.input
        const actual = coupleAdjacentCellToLeftSide(input)
        const expected = testObject.expected
        expect(actual).toMatchObject(expected)
      })
    })
  })
})

describe("get Number repition Count", () => {
  test("zeros repition count", () => {
    expect(getNumberRepitionCount([0, 4, 3, 4], 2)).toBe(0)
  })

  test("one repition count", () => {
    expect(getNumberRepitionCount([0, 2, 3, 4], 2)).toBe(1)
  })
  test("two repition count", () => {
    expect(getNumberRepitionCount([0, 2, 3, 2], 2)).toBe(2)
  })
  test("three repition count", () => {
    expect(getNumberRepitionCount([0, 2, 2, 2], 2)).toBe(3)
  })

  test("four repition count", () => {
    expect(getNumberRepitionCount([2, 2, 2, 2], 2)).toBe(4)
  })
})
