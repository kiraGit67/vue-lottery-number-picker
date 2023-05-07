"use strict";

Vue.createApp({
  data() {
    return {
      headlineText: "Lottery Numbers Picker",
      randomButtonText: "Pick Random Number",
      resetButtonText: "Reset Numbers",
      numbers: [],
    };
  },
  methods: {
    reset() {
      this.numbers.length = 0;
    },
    addNumber() {
      const newNumber = getRandomNumber(1, 49);
      if (!this.numbers.includes(newNumber)) {
        this.numbers.push(newNumber);
        return;
      }
      this.addNumber();
    },
  },
  computed: {
    allowReset() {
      return this.numbers.length !== 6;
    },
    allowAddNumber() {
      return this.numbers.length === 6;
    },
    sortedNumbers() {
      return this.numbers.sort((a, b) => a - b);
    },
  },
}).mount("#app");

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
