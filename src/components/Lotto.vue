<template>
  <div>
    <button @click.prevent="roll">돌리기</button>
    <div class="game-list" v-for="(numbers, index) in rows" :key="index">
        <span class="number" :class="numberColor(number)" v-for="number in numbers" :key="number">{{number}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lotto',
  data() {
      return {
        rows: []
      }
  },
  methods: {
      roll() {
          this.rows = [];
          for (var i = 0; i < 5; i++) {
            let numbers = [];

            while (numbers.length < 6) {
              let number = this.getRandomArbitrary(1, 45);

              if (numbers.indexOf(number) == -1)
                numbers.push(number);
            }

            numbers.sort(function(a, b) {
              return a - b;
            });

            this.rows.push(numbers);
          }
      },
      getRandomArbitrary(min, max) {
        return parseInt(Math.random() * (max - min) + min);
      },
      numberColor(number) {
        if (number <= 10)
          return "number-under-10";
        else if (number <= 20)
          return "number-under-20";
        else if (number <= 30)
          return "number-under-30";
        else if (number <= 40)
          return "number-under-40";

        return "number-under-45";
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-list {
  border-bottom: 2px solid #e2e2e2;
  margin: 5px 0px;
}

.game-list:first-of-type {
   border-top: 2px solid #e2e2e2;
}

.number {
    display: inline-block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 100%;
    color: white;
    text-align: center;
    margin: 10px;
}

.number-under-10 {
  background-color: #fbc400;
  text-shadow: 0px 0px 3px rgb(73 57 0 / 80%);
}

.number-under-20 {
  background-color: #69c8f2;
  text-shadow: 0px 0px 3px rgb(0 49 70 / 80%);
}

.number-under-30 {
  background: #ff7272;
  text-shadow: 0px 0px 3px rgb(64 0 0 / 80%);
}

.number-under-40 {
  background: #aaa;
  text-shadow: 0px 0px 3px rgb(61 61 61 / 80%);
}

.number-under-45 {
  background: #b0d840;
  text-shadow: 0px 0px 3px rgb(41 56 0 / 80%);
}
</style>
