import { hasTransformed } from "../board"

describe("has matrix transformed", () => {
  describe("has changed", () => {
    const noChanges = [
      {
        originalMatrix: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        transformedMatrix: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        output: false,
        message: "same zero matrix"
      }
    ]

    noChanges.map(testObject => {
      test(`${testObject.message}`, () => {
        expect(
          hasTransformed(
            testObject.originalMatrix,
            testObject.transformedMatrix
          )
        ).toBe(testObject.output)
      })
    })
  })

  describe("has shifted changed", () => {
    const singleChange = [
      {
        originalMatrix: [
          [2, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        transformedMatrix: [
          [0, 2, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        output: true,
        message: "single change matrix"
      },
      {
        originalMatrix: [
          [2, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        transformedMatrix: [
          [0, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        output: true,
        message: "single change matrix"
      }
    ]

    singleChange.map(testObject => {
      test(`${testObject.message}`, () => {
        expect(
          hasTransformed(
            testObject.originalMatrix,
            testObject.transformedMatrix
          )
        ).toBe(testObject.output)
      })
    })
  })

  describe("has merged", () => {
    const hasMerged = [
      {
        originalMatrix: [
          [2, 0, 0, 0],
          [2, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        transformedMatrix: [
          [0, 0, 0, 0],
          [4, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        output: true,
        message: "single change matrix"
      },
      {
        originalMatrix: [
          [2, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        transformedMatrix: [
          [0, 0, 0, 4],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0]
        ],
        output: true,
        message: "merges change matrix"
      }
    ]

    hasMerged.map(testObject => {
      test(`${testObject.message}`, () => {
        expect(
          hasTransformed(
            testObject.originalMatrix,
            testObject.transformedMatrix
          )
        ).toBe(testObject.output)
      })
    })
  })
})
