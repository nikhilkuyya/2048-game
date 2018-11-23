<template>
  <div class="fullgame">
      <board-header></board-header>
      <game-board ></game-board>
  </div>
</template>

<script>
import GameBoard from "./components/GameBoard.vue"
import BoardHeader from "./components/BoardHeader.vue"

export default {
  components: { GameBoard, BoardHeader },
  created: function() {
    document.addEventListener("keydown", this.handleKeyDown)
  },
  beforeDestroy: function() {
    document.removeEventListener("keydown", this.handleKeyDown)
  },
  computed: {
    board: function() {
      return this.$store.getters.boardState
    }
  },
  methods: {
    handleKeyDown: function(evt) {
      if (this.$store.getters.hasGameStarted) {
        const action = evt.key.toUpperCase().replace("ARROW", "")
        if (evt.keyCode >= 37 && evt.keyCode <= 40) {
          this.$store.commit("swipAction", action)
        }
      }
    }
  }
}
</script>

<style>
.fullgame {
  width: 30%;
  margin: auto;
}
</style>