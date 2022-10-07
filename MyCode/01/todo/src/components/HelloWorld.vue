<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <FirstComponent />
    <SecondComponent />
  </div>
</template>

<script>
import * as xeUtils from "xe-utils";
import FirstComponent from "./FirstComponent.vue";
import SecondComponent from "./SecondComponent.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    FirstComponent,
    SecondComponent,
  },
  setup() {
    console.log(xeUtils.isArray(null));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
