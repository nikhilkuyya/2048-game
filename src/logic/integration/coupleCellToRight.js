import { coupleAdjacentCellToRightSide, shiftZeros } from "../unit/transform"

function coupleCellToRight(row: number[]): number[] {
  return shiftZeros(coupleAdjacentCellToRightSide(shiftZeros(row)))
}

export { coupleCellToRight }
