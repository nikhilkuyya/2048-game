<template>
    <div class="board">
        <div v-for="(row,rowIndex) in boardState" :key="rowIndex" class="boardRow">
          <div v-for="(cellValue,colIndex) in row" :key="row.length *rowIndex + colIndex" class="boardCell">
            <board-tile :tile-value="cellValue"></board-tile>
          </div>    
        </div>        
    </div>    
</template>

<script>
import BoardTile from "./BoardTile.vue"

export default {
  components: {
    BoardTile
  },
  computed: {
    boardState: function() {
      return this.$store.getters.boardState
    }
  }
}
</script>

<style scoped>
.board {
  border: 3px dashed red;
  margin-top: 2rem;
  border-radius: 5%;
}

.boardRow {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.boardCell {
  border: 3px solid green;
  border-radius: 5%;
  margin-bottom: 0.2rem;
  flex-basis: 23%;
}
</style>
