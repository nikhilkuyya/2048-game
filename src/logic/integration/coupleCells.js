// @flow

import {
  shiftZerosToLeft,
  coupleAdjacentCellToLeftSide
} from "../unit/transform"
import { BoardRowState } from "../../boardTypes"
export { coupleCellToRight, coupleCellToLeft, coupleAdjacentCellToRightSide }

function coupleCellToRight(row: number[]): BoardRowState {
  const { updatedRow: mergedRow, score: score } = coupleAdjacentCellToRightSide(
    shiftZerosToLeft(row)
  )
  return { updatedRow: shiftZerosToLeft(mergedRow), score }
}

function coupleAdjacentCellToRightSide(row: number[]): BoardRowState {
  const { updatedRow: mergedRow, score: score } = coupleAdjacentCellToLeftSide(
    row.reverse()
  )
  return { updatedRow: mergedRow.reverse(), score }
}

function coupleCellToLeft(row: number[]): BoardRowState {
  const { score: score, updatedRow: mergedRow } = coupleAdjacentCellToLeftSide(
    shiftZerosToLeft(row)
  )
  const updatedRow = shiftZerosToLeft(mergedRow.reverse()).reverse()
  return { updatedRow, score }
}
