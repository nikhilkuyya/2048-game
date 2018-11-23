<template>

    <div  class="textstyle" :style="{ backgroundColor: `hsl(${hue},${saturation}%,50%)` }"> {{tileValue === 0 ? " " : tileValue}}</div>

</template>


<script>
export default {
  props: {
    tileValue: {
      type: Number,
      required: true,
      validator: function(tile) {
        return tile % 2 === 0
      }
    }
  },
  computed: {
    hue: function() {
      let hue = 0
      if (this.tileValue > 0) {
        hue = Math.trunc((this.tileValue / 2048) * 360)
        hue = Math.pow(4, hue)
      }
      return hue
    },
    saturation: function() {
      let sat = 0
      if (this.tileValue > 0) {
        sat = 50
      }
      return sat
    }
  }
}
</script>

<style scoped>
.textstyle {
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  height: 2rem;
  padding: 0.25rem;
}
</style>
