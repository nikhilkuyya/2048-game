// @flow

import { transposeMatrix } from "../unit/transform"
import { getBoardInformation } from "../unit/board"
import { coupleCellToRight, coupleCellToLeft } from "./coupleCells"

export { swipDown, swipLeft, swipRight, swipUp, hasGameEnded }

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

function hasGameEnded(board: number[][]): boolean {
  return (
    getBoardInformation(board).freeSpaces.length === 0 &&
    getBoardInformation(swipUp(board)).freeSpaces.length === 0 &&
    getBoardInformation(swipDown(board)).freeSpaces.length === 0 &&
    getBoardInformation(swipLeft(board)).freeSpaces.length === 0 &&
    getBoardInformation(swipRight(board)).freeSpaces.length === 0
  )
}
