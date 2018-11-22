import { getBoardInformation } from ".."

describe("check BoardInformation", () => {
  test("check contract", () => {
    expect(
      getBoardInformation([
        [0, 2, 4, 2],
        [2, 4, 2, 0],
        [4, 2, 2, 0],
        [0, 2, 4, 2]
      ])
    ).toMatchObject({
      sum: 32,
      twosCount: 8,
      foursCount: 4,
      freeSpaces: [0, 7, 11, 12]
    })
  })
})