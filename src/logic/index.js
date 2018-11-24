// @flow

import {
  pickRandomFreeTileLocation,
  getNewTile,
  getBoardInformation,
  hasTransformed
} from "./unit/board"
import { SwipeDirection, BoardState } from "../boardTypes"
import {
  swipUp,
  swipDown,
  swipLeft,
  swipRight,
  hasGameEnded
} from "./integration/swipAction"
export { placenew, handleSwip, getBoardInformation, hasGameEnded }

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

function handleSwip(board: number[][], direction: SwipeDirection): BoardState {
  let boardState: BoardState
  let transformedBoard: number[][] = board
  let score = 0
  switch (direction) {
    case "UP":
      boardState = swipUp(board)
      transformedBoard = boardState.board
      score = boardState.score
      break
    case "DOWN":
      boardState = swipDown(board)
      transformedBoard = boardState.board
      score = boardState.score
      break
    case "LEFT":
      boardState = swipLeft(board)
      transformedBoard = boardState.board
      score = boardState.score
      break
    case "RIGHT":
      boardState = swipRight(board)
      transformedBoard = boardState.board
      score = boardState.score
      break
  }
  let outputBoard: number[][]
  if (hasTransformed(board, transformedBoard)) {
    const { board: updatedBoard } = placenew(transformedBoard)
    outputBoard = updatedBoard
  } else {
    outputBoard = transformedBoard
  }

  return { board: outputBoard, score: score }
}
