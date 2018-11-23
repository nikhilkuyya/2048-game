// @flow

import { transposeMatrix, getNumberRepitionCount } from "./unit/transform"
import { coupleCellToRight, coupleCellToLeft } from "./integration/coupleCells"

type BoardInformationType = {
  twosCount: number,
  foursCount: number,
  freeSpaces: number[],
  hasGoalReached: boolean
}

type SwipeDirection = "UP" | "DOWN" | "RIGHT" | "LEFT"

function swipLeft(board: number[][]): number[][] {
  return board.map(row => coupleCellToLeft(row))
}

function swipRight(board: number[][]): number[][] {
  return board.map(row => coupleCellToRight(row))
}

function swipUp(board: number[][]): number[][] {
  return transposeMatrix(
    transposeMatrix(board).map(row => coupleCellToLeft(row))
  )
}

function swipDown(board: number[][]): number[][] {
  return transposeMatrix(
    transposeMatrix(board).map(row => coupleCellToRight(row))
  )
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

function pickRandomFreeTileLocation(
  freelocations: number[],
  size: number
): { row: number, column: number } | null {
  let position: { row: number, column: number } | null = null
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

function placenew(board: number[][]): { board: number[][], newTile: number } {
  const { twosCount, foursCount, freeSpaces } = getBoardInformation(board)
  const position = pickRandomFreeTileLocation(freeSpaces, board.length)
  const newTile = getNewTile(twosCount, foursCount, freeSpaces.length)
  if (
    newTile !== -1 &&
    position !== null &&
    board[position.row][position.column] === 0
  ) {
    board[position.row][position.column] = newTile
  }

  return { board, newTile }
}

function handleSwip(
  board: number[][],
  direction: SwipeDirection
): number[][] | null {
  let transformedBoard: number[][] = board
  switch (direction) {
    case "UP":
      transformedBoard = swipUp(board)
      break
    case "DOWN":
      transformedBoard = swipDown(board)
      break
    case "LEFT":
      transformedBoard = swipLeft(board)
      break
    case "RIGHT":
      transformedBoard = swipRight(board)
      break
  }

  const { board: updatedBoard } = placenew(transformedBoard)
  return updatedBoard
}

function hasGameEnded(board: number[][]): boolean {
  return (
    getBoardInformation(board).freeSpaces.length === 0 &&
    getBoardInformation(swipUp(board)).freeSpaces.length === 0 &&
    getBoardInformation(swipDown(board)).freeSpaces.length === 0 &&
    getBoardInformation(swipLeft(board)).freeSpaces.length === 0 &&
    getBoardInformation(swipRight(board)).freeSpaces.length === 0
  )
}

export { placenew, handleSwip, getBoardInformation, hasGameEnded }
