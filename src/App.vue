<template>
  <div>
    <div>{{board}}</div>    
  </div>
</template>

<script>
import { placenew, handleSwip } from "./logic/index"
export default {
  data() {
    return {
      board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    }
  },
  created: function() {
    const { board: initialValue } = placenew(this.board)
    const { board: secondtwoValue } = placenew(initialValue)
    this.data = secondtwoValue
    document.addEventListener("keydown", this.swip)
  },
  beforeDestroy: function() {
    document.removeEventListener("keydown", this.swip)
  },
  methods: {
    swip: function(evt) {
      const action = evt.key.toUpperCase().replace("ARROW", "")
      switch (evt.keyCode) {
        case 37:
          this.board = handleSwip(this.board, action)
          break
        case 38:
          this.board = handleSwip(this.board, action)
          break
        case 39:
          this.board = handleSwip(this.board, action)
          break
        case 40:
          this.board = handleSwip(this.board, action)
          break
      }
    }
  }
}
</script>