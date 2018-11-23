export { setInitialState }

function setInitialState() {
  const zerosState = new Array(4)
    .fill(0, 0, 4)
    .map((value, index, list) => list.slice())

  const initialState = {
    board: zerosState,
    hasCrackedGame: false,
    isGameOver: false
  }
  return initialState
}
