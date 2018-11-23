

<template>
    <header>
        <h1>{{header}}</h1>

        <input type="button" :value="buttonValue" @click="startNewGame"/>
    </header>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: "Let's Play, 2048 !"
    },
    buttonValue: {
      type: String,
      default: "New Game"
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
input {
  float: left;
  border-radius: 10%;
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
</style>
