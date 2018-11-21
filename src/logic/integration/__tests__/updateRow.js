import { updateRow } from "../updateRow"

describe("integration test : update row", () => {
  describe("no changes", () => {
    test("all zeros", () => {
      const input = [0, 0, 0, 0]
      const actual = updateRow(input)
      const expected = [0, 0, 0, 0]
      expect(actual).toMatchObject(expected)
    })

    test("all unique non zeros", () => {
      const input = [2, 4, 8, 16]
      const actual = updateRow(input)
      const expected = [2, 4, 8, 16]
      expect(actual).toMatchObject(expected)
    })

    test("three uniqure non zeros", () => {
      const input = [0, 4, 8, 16]
      const actual = updateRow(input)
      const expected = [0, 4, 8, 16]
      expect(actual).toMatchObject(expected)
    })

    test("two uniqure non zeros", () => {
      const input = [0, 0, 8, 16]
      const actual = updateRow(input)
      const expected = [0, 0, 8, 16]
      expect(actual).toMatchObject(expected)
    })
  })

  describe("single merge and update row", () => {
    test("two unique adjacent non zeros : center", () => {
      const input = [0, 8, 8, 0]
      const actual = updateRow(input)
      const expected = [0, 0, 0, 16]

      expect(actual).toMatchObject(expected)
    })

    test("two unique non zeros at the left corner", () => {
      const input = [8, 8, 0, 0]
      const actual = updateRow(input)
      const expected = [0, 0, 0, 16]

      expect(actual).toMatchObject(expected)
    })

    test("two unique non zeros with one gap and shift to right", () => {
      const input = [8, 0, 8, 0]
      const actual = updateRow(input)
      const expected = [0, 0, 0, 16]

      expect(actual).toMatchObject(expected)
    })

    test("two unique non zeros with one gap and no shift to right", () => {
      const input = [0, 8, 0, 8]
      const actual = updateRow(input)
      const expected = [0, 0, 0, 16]

      expect(actual).toMatchObject(expected)
    })
    test("two unique non zeros at the corners", () => {
      const input = [8, 0, 0, 8]
      const actual = updateRow(input)
      const expected = [0, 0, 0, 16]
      expect(actual).toMatchObject(expected)
    })

    test("three unique non zeros but one gap and shift to right", () => {
      const input = [8, 0, 8, 8]
      const actual = updateRow(input)
      const expected = [0, 0, 16, 8]
      expect(actual).toMatchObject(expected)
    })

    test("three unique non zeros but one gap and shift to right", () => {
      const input = [2, 0, 2, 2]
      const actual = updateRow(input)
      const expected = [0, 0, 4, 2]
      expect(actual).toMatchObject(expected)
    })

    test("three unique non zeros but one gap and shift to right", () => {
      const input = [2, 0, 2, 4]
      const actual = updateRow(input)
      const expected = [0, 0, 4, 4]
      expect(actual).toMatchObject(expected)
    })
  })

  describe("two merges and update row", () => {
    test("two adjacent merges ", () => {
      const input = [2, 2, 2, 2]
      const actual = updateRow(input)
      const expected = [0, 0, 4, 4]
      expect(actual).toMatchObject(expected)
    })
  })
})
