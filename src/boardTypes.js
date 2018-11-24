export type BoardInformationType = {
  twosCount: number,
  foursCount: number,
  freeSpaces: number[],
  hasGoalReached: boolean
}
export type SwipeDirection = "UP" | "DOWN" | "RIGHT" | "LEFT"

export type BoardRowState = {
  updatedRow: number[],
  score: number
}

export type BoardState = {
  board: number[][],
  score: number
}
