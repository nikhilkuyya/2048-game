import { mergeAdjacentCells, shiftZeros } from "../transform"

describe("merge cells", () => {
  describe("no merge/ update", () => {
    test("single non zero : no update", () => {
      const input = [0, 0, 0, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 0, 0, 2]
      expect(actual).toMatchObject(expected)
    })

    test("two unique non zero : no update", () => {
      const input = [0, 0, 4, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 0, 4, 2]
      expect(actual).toMatchObject(expected)
    })

    test("three unique non zero : no update", () => {
      const input = [0, 8, 4, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 8, 4, 2]
      expect(actual).toMatchObject(expected)
    })

    test("three non unique but separted by unique non zero : no update", () => {
      const input = [0, 2, 4, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 2, 4, 2]
      expect(actual).toMatchObject(expected)
    })

    test("four non unique but separted by unique non zero : no update", () => {
      const input = [4, 2, 4, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [4, 2, 4, 2]
      expect(actual).toMatchObject(expected)
    })

    test("four non unique but separted by unique non zero : no update", () => {
      const input = [2, 4, 8, 16]
      const actual = mergeAdjacentCells(input)
      const expected = [2, 4, 8, 16]
      expect(actual).toMatchObject(expected)
    })
  })

  describe("single merge", () => {
    test("two adjacent right corner into one at end", () => {
      const input = [0, 0, 2, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 0, 0, 4]
      expect(actual).toMatchObject(expected)
    })

    test("two adjacent center elements into one at end", () => {
      const input = [0, 2, 2, 0]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 0, 4, 0]
      expect(actual).toMatchObject(expected)
    })
  })

  describe("two merges", () => {
    test("four same values into two", () => {
      const input = [2, 2, 2, 2]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 4, 0, 4]
      expect(actual).toMatchObject(expected)
    })

    test("two different values merges", () => {
      const input = [2, 2, 4, 4]
      const actual = mergeAdjacentCells(input)
      const expected = [0, 4, 0, 8]
      expect(actual).toMatchObject(expected)
    })
  })
})

describe("shifting in array", () => {
  describe("no shift", () => {
    test("all zeros", () => {
      const input = [0, 0, 0, 0]
      const actual = shiftZeros(input)
      const expected = [0, 0, 0, 0]
      expect(actual).toMatchObject(expected)
    })

    test("all unique zeros", () => {
      const input = [8, 6, 4, 2]
      const actual = shiftZeros(input)
      const expected = [8, 6, 4, 2]
      expect(actual).toMatchObject(expected)
    })
  })

  describe("single elment shift", () => {
    test("single position shifted", () => {
      const input = [0, 0, 4, 0]
      const actual = shiftZeros(input)
      const expected = [0, 0, 0, 4]
      expect(actual).toMatchObject(expected)
    })

    test("two positions shifted", () => {
      const input = [0, 4, 0, 0]
      const actual = shiftZeros(input)
      const expected = [0, 0, 0, 4]
      expect(actual).toMatchObject(expected)
    })

    test("three positions shift", () => {
      const input = [4, 0, 0, 0]
      const actual = shiftZeros(input)
      const expected = [0, 0, 0, 4]
      expect(actual).toMatchObject(expected)
    })
  })

  describe("one shifted and other not shifted", () => {
    test("one position gap", () => {
      const input = [0, 2, 0, 4]
      const actual = shiftZeros(input)
      const expected = [0, 0, 2, 4]
      expect(actual).toMatchObject(expected)
    })

    test("two positions gap", () => {
      const input = [2, 0, 0, 4]
      const actual = shiftZeros(input)
      const expected = [0, 0, 2, 4]
      expect(actual).toMatchObject(expected)
    })
  })
})
