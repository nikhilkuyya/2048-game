import { mergeAdjacentCells, shiftZeros } from "./../unit/transform"

function updateRow(row: number[]): number[] {
  return shiftZeros(mergeAdjacentCells(shiftZeros(row)))
}

export { updateRow }
