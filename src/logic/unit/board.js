export { pickRandomFreeTileLocation, getNewTile, getBoardInformation }
import { BoardInformationType } from "../../boardTypes"
import { getNumberRepitionCount } from "./transform"

function pickRandomFreeTileLocation(
  freelocations: number[],
  size: number
): {
  row: number,
  column: number
} | null {
  let position: {
    row: number,
    column: number
  } | null = null
  if (freelocations.length > 0) {
    const randomPost =
      freelocations[Math.floor(Math.random() * freelocations.length)]
    const row = Math.trunc(randomPost / size)
    const column = randomPost % size
    position = { row, column }
  }
  return position
}

function getNewTile(
  twosCount: number,
  foursCount: number,
  freeSpacesLength: number
): number {
  let newTile = -1
  if (freeSpacesLength > 0) {
    if (twosCount <= foursCount) {
      newTile = 2
    } else {
      const pick = [2, 4]
      newTile = pick[Math.floor(Math.random() * 2)]
    }
  }
  return newTile
}

function getBoardInformation(board: number[][]): BoardInformationType {
  const initialBoardInformation: BoardInformationType = {
    twosCount: 0,
    foursCount: 0,
    freeSpaces: [],
    hasGoalReached: false
  }

  const size = board.length
  const boardInformation: BoardInformationType = board.reduce(
    (boardInf, row, rowIndex) => {
      boardInf.twosCount += getNumberRepitionCount(row, 2)
      boardInf.foursCount += getNumberRepitionCount(row, 4)
      row.forEach((cellValue, colIndex) => {
        if (cellValue === 0) {
          boardInf.freeSpaces.push(rowIndex * size + colIndex)
        } else if (cellValue === 2048) {
          boardInf.hasGoalReached = true
        }
      })
      return boardInf
    },
    initialBoardInformation
  )

  return boardInformation
}
