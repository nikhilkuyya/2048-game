// @flow

function coupleAdjacentCellToRightSide(row: number[]): number[] {
  //  transforming the row.
  let updateValue = false
  const tranformedRow = row.map((currentValue, currentIndex, list) => {
    let retVal = currentValue
    if (
      currentIndex + 1 <= list.length - 1 &&
      currentValue === list[currentIndex + 1] &&
      !updateValue
    ) {
      updateValue = true
      retVal = 0
    } else if (updateValue && currentValue === list[currentIndex - 1]) {
      retVal = currentValue + list[currentIndex - 1]
      updateValue = false
    }
    return retVal
  })

  return tranformedRow
}

function shiftZeros(tranformedRow: number[]): number[] {
  const len = tranformedRow.length
  // swifting the array
  const shiftedRow: number[] = []
  for (
    let backwardIndexIterator = len - 1;
    backwardIndexIterator >= 0;
    backwardIndexIterator--
  ) {
    if (tranformedRow[backwardIndexIterator] !== 0) {
      shiftedRow.push(tranformedRow[backwardIndexIterator])
    }
  }
  while (shiftedRow.length < len) {
    shiftedRow.push(0)
  }
  shiftedRow.reverse()

  return shiftedRow
}

export { coupleAdjacentCellToRightSide, shiftZeros }
