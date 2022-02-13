<template>
  <div class="container">
    <button class="btn mx-4 bg-blue-600 hover:bg-blue-900" @click.prevent="rollRandom">
      랜덤 돌리기
    </button>
    <button class="btn mx-4 bg-green-600 hover:bg-green-900" @click.prevent="rollWeight">
      가중치 돌리기
    </button>
    <div id="capture">
      <div class="game-list" v-for="(numbers, index) in rows" :key="index">
          <span class="number" :class="numberColor(number)" v-for="number in numbers" :key="number">{{number}}</span>
      </div>
    </div>
    <div v-if="alertDisply" class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded relative" role="alert">
      <p class="font-bold">캡처 완료</p>
    </div>
  </div>
</template>

<script>
import { rollRandom, rollWeight } from "@/helpers/roll.helper.js";
import html2canvas from "html2canvas";

export default {
  name: 'Lotto',
  data() {
      return {
        rows: [],
        alertDisply: false
      }
  },
  methods: {
      rollRandom() {
        this.rows = rollRandom(5);
        setTimeout(() => { this.capture() }, 2000);
      },
      rollWeight() {
        this.rows = rollWeight();
        setTimeout(() => { this.capture() }, 2000);
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
      },
      capture() {
        html2canvas(document.querySelector("#capture")).then(canvas => {
          const _this = this;
          //tested on chrome 76
          canvas.toBlob(function(blob) { 
            const { ClipboardItem } = window;
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard.write([item]);
            _this.alertShow();
          });
        });
      },
      alertShow() {
        this.alertDisply = true;
        setTimeout(() => {
          this.alertDisply = false;
        }, 5000);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container { 
  width: 450px;
  margin: 0 auto;
}
.game-list {
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #e2e2e2;
  margin: 5px 0px;
}

.game-list:first-of-type {
   border-top: 2px solid #e2e2e2;
}

.number {
    display: block;
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
