<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3 v-bind:text-content.prop="textContent"></h3>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
    <div>
      <p v-html="htmlText" />
      <p v-text="htmlText" />
    </div>
    <button @click="switchHighlight" class="btn btn-primary">
      Switch Highlight
    </button>
    <h3 v-bind:class="elemClasses">Element Classes</h3>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function () {
    return {
      name: "Lifejacket",
      highlight: false,
      htmlText: "<em>Emphasize</em>",
    };
  },
  computed: {
    elemClasses() {
      return this.highlight
        ? ["bg-light", "text-dark", "display-4"]
        : ["bg-dark", "text-light", "p-2"];
    },
    textContent() {
      return this.highlight ? "Highlight!" : `Product: ${this.name}`;
    },
  },
  methods: {
    handleClick() {
      this.highlight = !this.highlight;
    },
    switchHighlight() {
      this.highlight = !this.highlight;
    },
  },
};
</script>
