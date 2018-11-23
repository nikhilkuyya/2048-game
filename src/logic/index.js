// @flow

import {
  pickRandomFreeTileLocation,
  getNewTile,
  getBoardInformation,
  hasGameEnded
} from "./unit/board"
import { SwipeDirection, BoardInformationType } from "../boardTypes"
import { swipUp, swipDown, swipLeft, swipRight } from "./integration/swipAction"
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
