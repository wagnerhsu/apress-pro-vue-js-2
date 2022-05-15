<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3>Product: <span v-text="name"></span></h3>
      <span v-text="fragment"></span>
    </div>
    <div class="bg-secondary" v-if="showElements">
      <span v-html="fragment"></span>
    </div>
    <div :class="elemClasses">
      {{ name }}
    </div>
    <div :style="elemStyles">
      {{ name }}
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
  </div>
</template>
<script>
export default {
  name: 'DirectiveDemo',
  data() {
    return {
      name: 'Lifejacket',
      fragment: `<div class="form-group">
        Password
        <input class="form-control" />
        </div>`,
      showElements: true,
    };
  },
  computed: {
    elemClasses() {
      return ['bg-dark', 'text-light'];
    },
    elemStyles() {
      return {
        border: '5px solid red',
        'background-color': 'coral',
      };
    },
  },
  methods: {
    handleClick() {
      this.showElements = !this.showElements;
    },
  },
};
</script>
