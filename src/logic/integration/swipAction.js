import { transposeMatrix } from "../unit/transform"
import { coupleCellToRight, coupleCellToLeft } from "./coupleCells"
export function swipLeft(board: number[][]): number[][] {
  return board.map(row => coupleCellToLeft(row))
}
export function swipRight(board: number[][]): number[][] {
  return board.map(row => coupleCellToRight(row))
}
export function swipUp(board: number[][]): number[][] {
  return transposeMatrix(
    transposeMatrix(board).map(row => coupleCellToLeft(row))
  )
}
export function swipDown(board: number[][]): number[][] {
  return transposeMatrix(
    transposeMatrix(board).map(row => coupleCellToRight(row))
  )
}
