// @flow

function coupleAdjacentCellToRightSide(row: number[]): number[] {
  return coupleAdjacentCellToLeftSide(row.reverse()).reverse()
}

function shiftZeros(tranformedRow: number[]): number[] {
  const len = tranformedRow.length
  // swifting the array
  const shiftedRow: number[] = []
  for (let indexIterator = len - 1; indexIterator >= 0; indexIterator--) {
    if (tranformedRow[indexIterator] !== 0) {
      shiftedRow.push(tranformedRow[indexIterator])
    }
  }
  while (shiftedRow.length < len) {
    shiftedRow.push(0)
  }
  shiftedRow.reverse()

  return shiftedRow
}

function coupleAdjacentCellToLeftSide(row: number[]): number[] {
  //  transforming the row.
  let updateValue = false
  const tranformedRow = row.map((currentValue, currentIndex, list) => {
    let retVal = -1
    if (
      !updateValue &&
      currentIndex < list.length - 1 &&
      currentValue === list[currentIndex + 1]
    ) {
      retVal = currentValue + list[currentIndex + 1]
      updateValue = true
    } else if (updateValue) {
      retVal = 0
      updateValue = false
    } else {
      retVal = currentValue
      updateValue = false
    }
    return retVal
  })
  return tranformedRow
}

function transposeMatrix(matrix: number[][]): number[][] {
  return matrix[0].map((col, i) => matrix.map(row => row[i]))
}

function getNumberRepitionCount(row: number[], checkfor: number): number {
  return row.reduce((acc, value) => {
    return value === checkfor ? acc + 1 : acc
  }, 0)
}

export {
  coupleAdjacentCellToRightSide,
  shiftZeros,
  coupleAdjacentCellToLeftSide,
  transposeMatrix,
  getNumberRepitionCount
}
