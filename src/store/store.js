import Vue from "vue"
import Vuex from "vuex"
import {
  placenew,
  handleSwip,
  getBoardInformation,
  hasGameEnded
} from "../logic/index"
import { setInitialState } from "./initialState"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    ...setInitialState()
  },
  getters: {
    boardScore: state => {
      return state.score
    },
    boardState: state => {
      return state.board
    },
    goalReached: state => {
      return state.hasCrackedGame
    },
    isGameOver: state => {
      return state.isGameOver
    },
    hasGameStarted: state => {
      return (
        getBoardInformation(state.board).freeSpaces.length <
        state.board.length * state.board.length
      )
    }
  },
  mutations: {
    startGame: function(state) {
      Object.assign(state, setInitialState())
      state.board = placenew(placenew(state.board).board).board
    },

    swipAction: function(state, swipDirection) {
      const { board: updatedBoard, score } = handleSwip(
        state.board,
        swipDirection
      )

      state.board = updatedBoard
      state.score = state.score + score

      const { hasGoalReached, freeSpaces } = getBoardInformation(state.board)

      state.hasCrackedGame = hasGoalReached

      state.isGameOver =
        !state.hasCrackedGame &&
        freeSpaces.length === 0 &&
        hasGameEnded(state.board)
    }
  }
})
