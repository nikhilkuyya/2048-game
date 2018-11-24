

<template>
    <header>
        <h1>{{title}}</h1>
        <input type="button" :value="gameButtonValue" @click="startNewGame"/>        
        <div>
          <input type="text" class="score" readonly :value="boardScore"/>
        </div>
        <div :class="{'goal-finished' : goalReached , 'game-over': isGameOver}" >
          <p v-if="goalReached">
            Congrats!!, You have Reached 2048 mileStone.
          </p>
          <p v-else-if="isGameOver">
              Game Over, Try Again.
          </p>          
        </div>
    </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Let's Play, 2048 !"
    },
    buttonValue: {
      type: String,
      default: "New Game"
    }
  },
  computed: {
    gameButtonValue: function() {
      let title = "Start Game"
      if (this.$store.getters.hasGameStarted) {
        title = this.isGameOver ? "Try Again" : "New Game"
      }
      return title
    },
    goalReached: function() {
      const goalReached = this.$store.getters.goalReached
      return goalReached
    },
    isGameOver: function() {
      const isGameOver = this.$store.getters.isGameOver
      return isGameOver
    },
    boardScore: function() {
      return this.$store.getters.boardScore
    }
  },
  methods: {
    startNewGame: function() {
      this.$store.commit("startGame")
    }
  }
}
</script>

<style>
.score {
  background-color: antiquewhite;
  color: black;
  width: 40%;
  margin: auto;
  margin-left: 1rem;
}

input {
  float: left;
  border-radius: 8%;
  background-color: aqua;
  color: orangered;
  font-size: 2rem;
}

header {
  text-align: center;
  clear: both;
  content: "";
  display: table;
}

.goal-finished {
  color: green;
}

.game-over {
  color: red;
}
</style>
