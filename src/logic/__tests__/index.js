import { getBoardInformation } from ".."

describe("check BoardInformation", () => {
  test("check contract", () => {
    expect(
      getBoardInformation([
        [0, 2, 4, 2],
        [2, 4, 2, 0],
        [4, 2, 2, 0],
        [0, 2, 4, 2048]
      ])
    ).toMatchObject({
      twosCount: 7,
      foursCount: 4,
      freeSpaces: [0, 7, 11, 12],
      hasGoalReached: true
    })
  })

  test("check contract : case 2", () => {
    expect(
      getBoardInformation([
        [0, 2, 4, 2],
        [2, 4, 2, 0],
        [4, 2, 2, 0],
        [0, 2, 4, 2]
      ])
    ).toMatchObject({
      twosCount: 8,
      foursCount: 4,
      freeSpaces: [0, 7, 11, 12],
      hasGoalReached: false
    })
  })
})
