// @flow

import {
  shiftZerosToLeft,
  coupleAdjacentCellToLeftSide
} from "../unit/transform"

export { coupleCellToRight, coupleCellToLeft, coupleAdjacentCellToRightSide }

function coupleCellToRight(row: number[]): number[] {
  return shiftZerosToLeft(coupleAdjacentCellToRightSide(shiftZerosToLeft(row)))
}

function coupleAdjacentCellToRightSide(row: number[]): number[] {
  return coupleAdjacentCellToLeftSide(row.reverse()).reverse()
}

function coupleCellToLeft(row: number[]): number[] {
  return shiftZerosToLeft(
    coupleAdjacentCellToLeftSide(shiftZerosToLeft(row)).reverse()
  ).reverse()
}
