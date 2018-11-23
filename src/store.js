import Vue from "vue"
import Vuex from "vuex"
import { placenew, handleSwip } from "./logic/index"

Vue.use(Vuex)

const initialState = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

export const store = new Vuex.Store({
  state: {
    board: initialState
  },
  getters: {
    boardState: state => {
      return state.board
    }
  },
  mutations: {
    startGame: function(state) {
      const { board } = placenew(initialState)
      const { board: startState } = placenew(board)
      state.board = startState
    },
    swipAction: function(state, swipDirection) {
      state.board = handleSwip(state.board, swipDirection)
    }
  }
})
