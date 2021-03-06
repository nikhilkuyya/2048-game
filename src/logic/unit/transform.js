// @flow

export {
  shiftZerosToLeft,
  coupleAdjacentCellToLeftSide,
  transposeMatrix,
  getNumberRepitionCount
}

function shiftZerosToLeft(tranformedRow: number[]): number[] {
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

function coupleAdjacentCellToLeftSide(
  row: number[]
): { updatedRow: number[], score: number } {
  //  transforming the row.
  let updateValue = false
  const tranformedRow = row.reduce(
    (acc, currentValue, currentIndex, list) => {
      let retVal = -1
      if (
        !updateValue &&
        currentIndex < list.length - 1 &&
        currentValue === list[currentIndex + 1]
      ) {
        retVal = currentValue + list[currentIndex + 1]
        acc.score += retVal
        updateValue = true
      } else if (updateValue) {
        retVal = 0
        updateValue = false
      } else {
        retVal = currentValue
        updateValue = false
      }
      acc.updatedRow.push(retVal)
      return acc
    },
    {
      updatedRow: [],
      score: 0
    }
  )
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
