// @flow

import { transposeMatrix } from "../unit/transform"
import { getBoardInformation } from "../unit/board"
import { coupleCellToRight, coupleCellToLeft } from "./coupleCells"
import { BoardRowState, BoardState } from "../../boardTypes"
export { swipDown, swipLeft, swipRight, swipUp, hasGameEnded }

function swipLeft(board: number[][]): BoardState {
  return reduceToBoardState(board.map(row => coupleCellToLeft(row)))
}

function swipRight(board: number[][]): BoardState {
  return reduceToBoardState(board.map(row => coupleCellToRight(row)))
}

function swipUp(board: number[][]): BoardState {
  const { board: updatedBoard, score } = reduceToBoardState(
    transposeMatrix(board).map(row => coupleCellToLeft(row))
  )
  return { board: transposeMatrix(updatedBoard), score }
}

function swipDown(board: number[][]): BoardState {
  const { board: updatedBoard, score } = reduceToBoardState(
    transposeMatrix(board).map(row => coupleCellToRight(row))
  )
  return { board: transposeMatrix(updatedBoard), score }
}

function hasGameEnded(board: number[][]): boolean {
  return (
    getBoardInformation(board).freeSpaces.length === 0 &&
    getBoardInformation(swipUp(board).board).freeSpaces.length === 0 &&
    getBoardInformation(swipDown(board).board).freeSpaces.length === 0 &&
    getBoardInformation(swipLeft(board).board).freeSpaces.length === 0 &&
    getBoardInformation(swipRight(board).board).freeSpaces.length === 0
  )
}

function reduceToBoardState(
  boardStatewithScore: Array<BoardRowState>
): BoardState {
  const board = []
  const score = 0
  return boardStatewithScore.reduce(
    (acc, rowState) => {
      acc.board.push(rowState.updatedRow)
      acc.score += rowState.score
      return acc
    },
    {
      board,
      score
    }
  )
}
