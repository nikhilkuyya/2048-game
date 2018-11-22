import {
  coupleAdjacentCellToRightSide,
  shiftZeros,
  coupleAdjacentCellToLeftSide
} from "../unit/transform"

function coupleCellToRight(row: number[]): number[] {
  return shiftZeros(coupleAdjacentCellToRightSide(shiftZeros(row)))
}

function coupleCellToLeft(row: number[]): number[] {
  return shiftZeros(
    coupleAdjacentCellToLeftSide(shiftZeros(row)).reverse()
  ).reverse()
}

export { coupleCellToRight, coupleCellToLeft }
